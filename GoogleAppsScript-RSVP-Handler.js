/**
 * 🎉 AUTOMATED GOOGLE SHEETS RSVP SETUP
 * 
 * COPY THIS ENTIRE FILE AND PASTE IT INTO GOOGLE APPS SCRIPT
 * It will automatically set up your sheet!
 */

/**
 * STEP 1: Create a new Google Sheet
 * STEP 2: Click Extensions → Apps Script
 * STEP 3: Delete any existing code
 * STEP 4: Copy and paste THIS ENTIRE FILE
 * STEP 5: Click the ▶️ button next to "setupSheet" function
 * STEP 6: Grant permissions when asked
 * STEP 7: Deploy as web app
 */

// ==========================================
// AUTOMATIC SETUP FUNCTION
// ==========================================

/**
 * Run this function ONCE to set up your sheet automatically
 * Click the ▶️ Run button next to "setupSheet"
 */
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Clear any existing data
  sheet.clear();
  
  // Set up headers
  const headers = [
    'Timestamp',
    'Name', 
    'Attendance',
    'Costume/Character',
    'Message'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  headerRange.setFontSize(11);
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Auto-resize columns
  for (let i = 1; i <= headers.length; i++) {
    sheet.autoResizeColumn(i);
  }
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 200); // Name
  sheet.setColumnWidth(3, 120); // Attendance
  sheet.setColumnWidth(4, 200); // Costume
  sheet.setColumnWidth(5, 300); // Message
  
  // Add data validation for attendance column (just for manual entries)
  const attendanceRange = sheet.getRange(2, 3, 1000, 1);
  const attendanceRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['YES ✅', 'NO ❌'])
    .build();
  attendanceRange.setDataValidation(attendanceRule);
  
  // Rename sheet
  sheet.setName('Party RSVPs');
  
  // Show success message
  SpreadsheetApp.getUi().alert(
    '✅ Setup Complete!',
    'Your RSVP sheet is ready!\n\n' +
    'Next steps:\n' +
    '1. Deploy this script as a Web App\n' +
    '2. Copy the Web App URL\n' +
    '3. Paste it in your Angular code\n\n' +
    'See the instructions below the code.',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
  
  Logger.log('Sheet setup complete!');
}

// ==========================================
// RSVP HANDLER FUNCTION (MAIN)
// ==========================================

/**
 * This function receives RSVP submissions from your website
 * DO NOT run this manually - it's called automatically
 */
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Party RSVPs');
    
    if (!sheet) {
      throw new Error('Sheet "Party RSVPs" not found. Run setupSheet() first!');
    }
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Format attendance for better readability
    const attendance = data.attendance === 'yes' ? 'YES ✅' : 'NO ❌';
    
    // Prepare row data
    const rowData = [
      new Date(),                           // Timestamp
      data.name || 'Unknown',               // Name
      attendance,                           // Attendance
      data.character || 'Not specified',    // Costume
      data.message || 'No message'          // Message
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-format the new row
    const lastRow = sheet.getLastRow();
    const rowRange = sheet.getRange(lastRow, 1, 1, 5);
    
    // Add alternating colors
    if (lastRow % 2 === 0) {
      rowRange.setBackground('#f8f9fa');
    }
    
    // Color code by attendance
    const attendanceCell = sheet.getRange(lastRow, 3);
    if (data.attendance === 'yes') {
      attendanceCell.setBackground('#d4edda'); // Light green
      attendanceCell.setFontColor('#155724');  // Dark green
    } else {
      attendanceCell.setBackground('#f8d7da'); // Light red
      attendanceCell.setFontColor('#721c24');  // Dark red
    }
    
    // Log success
    Logger.log('RSVP received: ' + data.name + ' - ' + attendance);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: 'RSVP recorded successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    Logger.log('ERROR: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// TEST FUNCTION (OPTIONAL)
// ==========================================

/**
 * Run this to test the doPost function with sample data
 * Click the ▶️ Run button next to "testRSVP"
 */
function testRSVP() {
  const testData = {
    name: "Alice Wonderland",
    attendance: "yes",
    character: "The White Rabbit",
    message: "Can't wait for the party!"
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  Logger.log('Test Result: ' + result.getContent());
  
  SpreadsheetApp.getUi().alert(
    '✅ Test Complete!',
    'Check your sheet - a test RSVP should appear!\n\n' +
    'If you see the new row, everything is working!',
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

// ==========================================
// STATISTICS FUNCTION (BONUS!)
// ==========================================

/**
 * Get statistics about your RSVPs
 * Run this anytime to see a summary
 */
function showStatistics() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Party RSVPs');
  const data = sheet.getDataRange().getValues();
  
  // Skip header row
  const rsvps = data.slice(1);
  
  let attending = 0;
  let notAttending = 0;
  
  rsvps.forEach(row => {
    if (row[2].includes('YES')) {
      attending++;
    } else if (row[2].includes('NO')) {
      notAttending++;
    }
  });
  
  const stats = 
    '📊 RSVP STATISTICS\n\n' +
    '✅ Attending: ' + attending + ' people\n' +
    '❌ Not Attending: ' + notAttending + ' people\n' +
    '📝 Total Responses: ' + rsvps.length;
  
  SpreadsheetApp.getUi().alert('Party Statistics', stats, SpreadsheetApp.getUi().ButtonSet.OK);
  
  Logger.log(stats);
}

// ==========================================
// CUSTOM MENU (BONUS!)
// ==========================================

/**
 * Adds a custom menu to your Google Sheet
 * This runs automatically when you open the sheet
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🎉 Party Manager')
    .addItem('📊 Show Statistics', 'showStatistics')
    .addItem('🧪 Test RSVP', 'testRSVP')
    .addSeparator()
    .addItem('⚙️ Setup Sheet', 'setupSheet')
    .addToUi();
}

/**
 * ==========================================
 * 📝 DEPLOYMENT INSTRUCTIONS
 * ==========================================
 * 
 * AFTER PASTING THIS CODE:
 * 
 * 1. Click the ▶️ button next to "setupSheet"
 *    - Grant permissions when asked
 *    - Your sheet will be formatted automatically!
 * 
 * 2. Test it:
 *    - Click the ▶️ button next to "testRSVP"
 *    - Check if a test row appears in your sheet
 * 
 * 3. Deploy as Web App:
 *    - Click "Deploy" → "New deployment"
 *    - Click gear icon ⚙️ → Select "Web app"
 *    - Description: "RSVP Handler"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 *    - Copy the Web App URL
 * 
 * 4. Update your Angular code:
 *    - Open: /src/app/components/rsvp/rsvp.component.ts
 *    - Line 21: Paste your Web App URL
 * 
 * 5. Done! Test your website form
 * 
 * ==========================================
 * 🎊 BONUS FEATURES
 * ==========================================
 * 
 * After setup, you'll have a custom menu:
 * "🎉 Party Manager" in your Google Sheet
 * 
 * Use it to:
 * - View statistics (who's coming, how many guests)
 * - Test the form
 * - Re-setup if needed
 * 
 * ==========================================
 */
