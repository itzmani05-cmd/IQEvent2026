process.on("uncaughtException", err => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", err => {
  console.error("UNHANDLED PROMISE:", err);
});


const express = require("express");
const multer = require("multer");
const XLSX = require("xlsx");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

function generateReferralCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function readSheet(workbook, sheetName) {
  if (!workbook.Sheets[sheetName]) return [];
  return XLSX.utils.sheet_to_json(
    workbook.Sheets[sheetName],
    { defval: "" }
  );
}

app.post("/register", upload.single("paymentProof"), (req, res) => {
  try {
    const filePath = "IQEventsRegistration.xlsx";
    const REG_SHEET = "Registrations";
    const REF_SHEET = "Referrals";

    const referralCode = generateReferralCode();
    const usedReferralCode = req.body.usedReferralCode?.trim();

    let workbook = fs.existsSync(filePath)
      ? XLSX.readFile(filePath)
      : XLSX.utils.book_new();

    let registrations = readSheet(workbook, REG_SHEET);

    const newRegistration = {
      SNo: registrations.length + 1,
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      College: req.body.college,
      Department: req.body.department,
      Year: req.body.year,
      EventAmount: req.body.eventAmount,
      TransactionID: req.body.transactionId,
      ReferralCode: referralCode,
      UsedReferralCode: usedReferralCode || "", // Track which referral code was used
      Time: req.body.timestamp,
      PaymentFile: req.file?.filename || "",
    };

    registrations.push(newRegistration);

    const regWS = XLSX.utils.json_to_sheet(registrations, {
      header: [
        "SNo",
        "Name",
        "Email",
        "Phone",
        "College",
        "Department",
        "Year",
        "EventAmount",
        "TransactionID",
        "ReferralCode",
        "UsedReferralCode",
        "Time",
        "PaymentFile",
      ],
    });

    workbook.Sheets[REG_SHEET] = regWS;
    if (!workbook.SheetNames.includes(REG_SHEET)) {
      workbook.SheetNames.push(REG_SHEET);
    }

    let referrals = readSheet(workbook, REF_SHEET);

    // Check if the referral code used is valid
    if (usedReferralCode) {
      const referredByIndex = referrals.findIndex(
        r => r.ReferralCode === usedReferralCode
      );
      
      if (referredByIndex !== -1) {
        // Valid referral code - increment points for the referrer
        referrals[referredByIndex].Points =
          Number(referrals[referredByIndex].Points || 0) + 10;
          
        // Add the new user to the referral tracking
        referrals.push({
          ReferralCode: referralCode, // The new user gets their own referral code
          Name: req.body.name,
          Email: req.body.email,
          Points: 0, // New users start with 0 points
          ReferredBy: usedReferralCode, // Track who referred this user
          ReferredByName: referrals[referredByIndex].Name // Store name of referrer
        });
      } else {
        // Invalid referral code - add user without referral credit
        referrals.push({
          ReferralCode: referralCode,
          Name: req.body.name,
          Email: req.body.email,
          Points: 0,
          ReferredBy: "", // No referral code used
          ReferredByName: "" // No referrer
        });
      }
    } else {
      // No referral code used - add user normally
      referrals.push({
        ReferralCode: referralCode,
        Name: req.body.name,
        Email: req.body.email,
        Points: 0,
        ReferredBy: "", // No referral code used
        ReferredByName: "" // No referrer
      });
    }

    const refWS = XLSX.utils.json_to_sheet(referrals, {
      header: ["ReferralCode", "Name", "Email", "Points", "ReferredBy", "ReferredByName"],
    });

    workbook.Sheets[REF_SHEET] = refWS;
    if (!workbook.SheetNames.includes(REF_SHEET)) {
      workbook.SheetNames.push(REF_SHEET);
    }

    XLSX.writeFile(workbook, filePath);

    res.json({
      success: true,
      referralCode,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.get("/", (req, res) => {
  res.send("Server running successfully 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
