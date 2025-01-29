import { google } from "googleapis";

const getGoogleSheetsClient = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
};

export const appendToSheet = async (spreadsheetId, sheetName, values) => {
  try {
    const googleSheets = await getGoogleSheetsClient();

    const range = `${sheetName}!A:B`; // Customize this based on columns needed

    const response = await googleSheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: { values },
    });

    console.log("Google Sheets Update Success:");
  } catch (error) {
    console.error("Error updating Google Sheets:", error.message);
  }
};
