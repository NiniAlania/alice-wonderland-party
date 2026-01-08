# 📊 Google Sheets RSVP Setup (10 Minutes)

## ✨ What You'll Get

All RSVPs automatically saved to a Google Sheet with columns:
- Timestamp
- Name
- Attendance (Yes/No)
- Number of Guests
- Costume/Character
- Message

**No email needed!** Just a live spreadsheet that updates automatically.

---

## 🚀 Setup Steps

### Step 1: Create Google Sheet (2 minutes)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **"+ Blank"** to create new spreadsheet
3. Name it: **"Alice in Wonderland Party RSVPs"**
4. Add these headers in Row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Attendance
   D1: Number of Guests
   E1: Costume/Character
   F1: Message
   ```

### Step 2: Create Apps Script (5 minutes)

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. **Copy and paste this code:**

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Format attendance for better readability
    const attendance = data.attendance === 'yes' ? 'YES ✅' : 'NO ❌';
    
    // Prepare row data
    const rowData = [
      new Date(),                    // Timestamp
      data.name,                     // Name
      attendance,                    // Attendance
      data.guestCount || 'N/A',     // Number of Guests
      data.character || 'Not specified', // Costume
      data.message || 'No message'   // Message
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testPost() {
  const testData = {
    name: "Test User",
    attendance: "yes",
    guestCount: 2,
    character: "Mad Hatter",
    message: "Can't wait!"
  };
  
  const e = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(e);
  Logger.log(result.getContent());
}
```

4. Click **Save** (disk icon)
5. Name the project: **"RSVP Handler"**

### Step 3: Deploy as Web App (3 minutes)

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ → Select **"Web app"**
3. Fill in these settings:
   - **Description:** "RSVP Form Handler"
   - **Execute as:** "Me"
   - **Who has access:** "Anyone"
4. Click **Deploy**
5. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/ABC123.../exec`)
6. Click **Done**

---

## 🔧 Update Your Code

Now update the RSVP component to use Google Sheets:

### Option 1: Quick Update (Recommended)

Open `/src/app/components/rsvp/rsvp.component.ts` and replace the `onSubmit` method with:

```typescript
async onSubmit() {
  const data = this.formData();
  
  // Basic validation
  if (!data.name || !data.attendance) {
    this.error.set('Please fill in your name and attendance');
    return;
  }
  
  this.submitting.set(true);
  this.error.set('');
  
  try {
    // Send to Google Sheets
    const response = await fetch('YOUR_WEB_APP_URL_HERE', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    // no-cors mode doesn't return response, so assume success
    this.submitted.set(true);
    console.log('RSVP submitted to Google Sheets:', data);
    
  } catch (err) {
    console.error('Error submitting RSVP:', err);
    this.error.set('An error occurred. Please try again later.');
  } finally {
    this.submitting.set(false);
  }
}
```

**Replace `YOUR_WEB_APP_URL_HERE`** with your actual Web App URL!

---

## ✅ Test It!

1. Go to your website: `http://localhost:4200`
2. Fill out the RSVP form
3. Click "Send RSVP"
4. Check your Google Sheet - new row should appear! 🎉

---

## 🎨 Bonus: Format Your Sheet

Make it pretty:

1. **Freeze header row:** View → Freeze → 1 row
2. **Bold headers:** Select row 1 → Bold
3. **Add colors:** 
   - Header row: Light blue background
   - YES rows: Light green background
   - NO rows: Light pink background
4. **Auto-resize columns:** Double-click column borders
5. **Add filter:** Select headers → Data → Create a filter

---

## 📊 What Your Sheet Will Look Like

| Timestamp | Name | Attendance | Number of Guests | Costume/Character | Message |
|-----------|------|------------|------------------|-------------------|---------|
| 1/7/2026 10:30 AM | Alice Wonder | YES ✅ | 3 | White Rabbit | So excited! |
| 1/7/2026 11:15 AM | Bob Smith | NO ❌ | N/A | Not specified | Sorry, can't make it |
| 1/7/2026 2:45 PM | Carol Johnson | YES ✅ | 2 | Mad Hatter | Can't wait! |

---

## 🔒 Security Notes

- **"Anyone" access** means anyone with the URL can submit (perfect for RSVPs!)
- Your sheet is still private - only you can see it
- Script URL is hard to guess
- Consider adding duplicate detection if needed

---

## 🐛 Troubleshooting

### "Script not found" error
- Make sure you deployed the script
- Check you copied the correct Web App URL
- Try redeploying

### Data not appearing in sheet
- Check Apps Script logs: Apps Script editor → Executions
- Make sure sheet has the header row
- Try the test function in Apps Script

### CORS errors in browser
- This is normal with `mode: 'no-cors'`
- Data still goes through, just can't read response
- That's why we assume success

---

## 🎯 Advantages of Google Sheets

✅ All data in one place  
✅ Easy to sort, filter, export  
✅ No email clutter  
✅ Share with co-organizers  
✅ Create charts/graphs  
✅ Download as Excel/CSV  
✅ Free forever  

---

## 📱 View RSVPs Anywhere

- Desktop: [sheets.google.com](https://sheets.google.com)
- Mobile: Google Sheets app (iOS/Android)
- Share with others for real-time collaboration

---

**That's it! 10 minutes and you have a professional RSVP system!** 🎊

Need help? The error messages will show in:
- Browser console (F12)
- Apps Script executions log
