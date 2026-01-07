// Google Apps Script untuk Wedding Wishes
// Deploy sebagai Web App dengan akses "Anyone"

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Wishes');
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({
      error: 'Sheet not found'
    })).setMimeType(ContentService.MimeType.JSON);
  }
  
  const data = sheet.getDataRange().getValues();
  const wishes = [];
  
  // Skip header row (index 0)
  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) { // Check if row has data
      wishes.push({
        id: data[i][0],
        name: data[i][1],
        attendance: data[i][2],
        message: data[i][3],
        timestamp: data[i][4]
      });
    }
  }
  
  // Sort by timestamp descending (newest first)
  wishes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  return ContentService.createTextOutput(JSON.stringify({
    wishes: wishes
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Wishes');
    
    if (!sheet) {
      // Create sheet if doesn't exist
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Wishes');
      newSheet.appendRow(['ID', 'Name', 'Attendance', 'Message', 'Timestamp']);
    }
    
    const data = JSON.parse(e.postData.contents);
    const id = new Date().getTime().toString();
    
    sheet.appendRow([
      id,
      data.name,
      data.attendance,
      data.message,
      data.timestamp || new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Wish added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
