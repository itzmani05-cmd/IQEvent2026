const { google } = require("googleapis");
const path= require('path');

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname,"credentials.json"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = "19tX9O00FCZ1hYYqIFQB8hxXSyVsvK4wzuhWQ7ithpiE"; 

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

async function getSheetData(sheetName) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A2:Z`,
  });
  return res.data.values || [];
}

module.exports = { appendRow, getSheetData };
