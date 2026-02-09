const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const { appendRow, getSheetData } = require("./googleSheets");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadDir),
  filename: (_, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.random().toString(36).slice(2);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, 
  },
  fileFilter: (_, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed"), false);
    }
    cb(null, true);
  },
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


function generateReferralCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post("/register", upload.single("paymentProof"), async (req, res) => {
  try {
    const REG_SHEET = "Registrations";
    const REF_SHEET = "Referrals";

    const requiredFields = [
      "name",
      "email",
      "phone",
      "college",
      "department",
      "year",
      "eventType",
      "transactionId",
      "timestamp",
    ];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        if (req.file?.path && fs.existsSync(req.file.path)) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(400).json({
          success: false,
          message: `Missing field: ${field}`,
        });
      }
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Payment proof image is required",
      });
    }

    // ✅ Generate public image URL
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    /* ---------- REFERRAL CODE ---------- */
    const existingReferrals = await getSheetData(REF_SHEET);
    const existingCodes = new Set(existingReferrals.map(r => r[0]));

    let referralCode;
    do {
      referralCode = generateReferralCode();
    } while (existingCodes.has(referralCode));

    const usedReferralCode = req.body.usedReferralCode?.trim() || "";

    /* ---------- LOG REFERRAL ---------- */
    await appendRow(REF_SHEET, [
      referralCode,
      req.body.name,
      req.body.email,
      0,
      usedReferralCode,
      new Date().toISOString(),
    ]);

    /* ---------- LOG REGISTRATION ---------- */
    await appendRow(REG_SHEET, [
      req.body.name,
      req.body.email,
      req.body.phone,
      req.body.college,
      req.body.department,
      req.body.year,
      req.body.eventType,
      req.body.transactionId,
      referralCode,
      usedReferralCode,
      req.body.timestamp,
      imageUrl, // ✅ ONLY THIS
    ]);

    res.json({
      success: true,
      referralCode,
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);

    if (req.file?.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


app.get("/", (_, res) => {
  res.send("Server running successfully");
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  if (err.message === "Only image files are allowed") {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  console.error("UNHANDLED ERROR:", err);
  res.status(500).json({
    success: false,
    message: "Unexpected server error",
  });
});

process.on("uncaughtException", err => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", err => {
  console.error("UNHANDLED PROMISE:", err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
