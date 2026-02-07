process.on("uncaughtException", err => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", err => {
  console.error("UNHANDLED PROMISE:", err);
});

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

/* ---------- FILE UPLOAD ---------- */
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadDir),
  filename: (_, file, cb) => {
    const name = Date.now() + "-" + Math.random().toString(36).slice(2);
    cb(null, name + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

/* ---------- HELPERS ---------- */
function generateReferralCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/* ---------- REGISTER API ---------- */
app.post("/register", upload.single("paymentProof"), async (req, res) => {
  try {
    const REG_SHEET = "Registrations";
    const REF_SHEET = "Referrals";

    const referralCode = generateReferralCode();
    const usedReferralCode = req.body.usedReferralCode?.trim() || "";

    /* ---------- LOG REFERRAL EVENT ---------- */
    await appendRow(REF_SHEET, [
      referralCode,              // New user's referral code
      req.body.name,
      req.body.email,
      0,                          // Initial points
      usedReferralCode || "",     // Who referred
      new Date().toISOString()
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
      req.file?.filename || "",
    ]);

    res.json({ success: true, referralCode });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


/* ---------- HEALTH CHECK ---------- */
app.get("/", (_, res) => {
  res.send("Server running successfully 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
