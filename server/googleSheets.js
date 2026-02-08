const { google } = require("googleapis");

/* ---------- LOAD CREDENTIALS FROM ENV ---------- */
const credentials = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT_JSON
);

/* ---------- AUTH ---------- */
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

/* ---------- SHEETS CLIENT ---------- */
const sheets = google.sheets({
  version: "v4",
  auth,
});

/* ---------- SPREADSHEET ID ---------- */
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

/* ---------- APPEND ROW ---------- */
async function appendRow(sheetName, row) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [row],
    },
  });
}

/* ---------- GET SHEET DATA ---------- */
async function getSheetData(sheetName) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: sheetName,
  });
  return res.data.values || [];
}

module.exports = { appendRow, getSheetData };
