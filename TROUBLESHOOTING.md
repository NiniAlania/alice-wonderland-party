# 🔍 RSVP Form Not Showing in Google Sheet - Troubleshooting

## Quick Checklist:

### ✅ Step 1: Check Your Browser Console
1. Open your website: http://localhost:4200
2. Press **F12** (or Cmd+Option+J on Mac)
3. Click the **Console** tab
4. Fill out and submit the RSVP form
5. Look for messages - do you see:
   - "RSVP submitted to Google Sheets: ..."
   - OR any red error messages?

**What to look for:**
- ✅ If you see "RSVP submitted to Google Sheets" = form is sending data
- ❌ If you see errors = there's a problem with the connection

---

### ✅ Step 2: Verify Google Apps Script is Updated

**IMPORTANT:** You removed the "Number of Guests" field, so you need to update your Google Apps Script!

#### Do This Now:
1. Go to your **Google Sheet**
2. Click **Extensions → Apps Script**
3. **Delete ALL the old code**
4. Go to VS Code and open: **`GoogleAppsScript-RSVP-Handler.js`**
5. **Copy ALL the code** (Cmd+A, Cmd+C)
6. **Paste** it in Apps Script
7. Click **💾 Save**
8. Select **setupSheet** from dropdown
9. Click **▶️ Run**
10. Wait for "✅ Setup Complete!"

**This updates your sheet to the new format without guest count!**

---

### ✅ Step 3: Redeploy Your Script

After updating the code, you need to create a NEW deployment:

1. In Apps Script, click: **Deploy → Manage deployments**
2. Click the **pencil icon (✏️)** next to your existing deployment
3. At the top right, change the **Version** to "New version"
4. Type description: "Removed guest count"
5. Click **Deploy**
6. **Copy the NEW URL** (it might be the same or different)
7. Update `rsvp.component.ts` line 23 with the new URL if it changed

**OR create a completely new deployment:**
1. Click **Deploy → New deployment**
2. Select **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy**
6. Copy the URL

---

### ✅ Step 4: Check Sheet Permissions

Make sure your sheet is set up correctly:

1. Go to your **Google Sheet**
2. Go to **Extensions → Apps Script**
3. Click **Deploy → Manage deployments**
4. Check settings:
   - Execute as: **Me** ✓
   - Who has access: **Anyone** ✓

---

### ✅ Step 5: Test Directly in Apps Script

Let's test if the script works:

1. In **Apps Script**, select **testRSVP** from dropdown
2. Click **▶️ Run**
3. Check your Google Sheet - did a test row appear?
   - ✅ **YES** = Script works, problem is with website connection
   - ❌ **NO** = Script has an error

If NO:
- Click **Executions** (clock icon on left sidebar)
- Look for error messages
- Share the error with me

---

### ✅ Step 6: Common Issues & Fixes

#### Issue: "TypeError: Cannot read property 'contents'"
**Fix:** Your form is sending data in wrong format
- Make sure you updated the Apps Script code
- Make sure you ran `setupSheet` again

#### Issue: "Sheet 'Party RSVPs' not found"
**Fix:** Sheet name doesn't match
- In your Google Sheet, rename the tab to exactly: **Party RSVPs**
- OR update the script to use your sheet name

#### Issue: Data goes to wrong columns
**Fix:** Headers don't match the new format
- Run **setupSheet** function again in Apps Script
- This will fix the column headers

#### Issue: "Access denied" or permission errors
**Fix:** Authorization issue
- Go to Apps Script
- Select any function
- Click **▶️ Run**
- Grant permissions again

---

### ✅ Step 7: Manual Test

Try this manual test to see if data arrives:

1. Open **Google Sheet**
2. In **Apps Script**, paste this in the script:

```javascript
function manualTest() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Party RSVPs');
  sheet.appendRow([
    new Date(),
    'Manual Test',
    'YES ✅',
    'Test Costume',
    'Test Message'
  ]);
  Logger.log('Manual test row added');
}
```

3. Run **manualTest**
4. Check your sheet - did a row appear?
   - ✅ **YES** = Sheet connection works
   - ❌ **NO** = Sheet setup issue

---

## 🎯 Most Likely Problem:

**You updated the form to remove "guest count" but didn't update the Google Apps Script!**

### The Fix:
1. ✅ Update Apps Script code (copy from `GoogleAppsScript-RSVP-Handler.js`)
2. ✅ Run `setupSheet` to update headers
3. ✅ Redeploy the script (new version)
4. ✅ Test the form again

---

## 📞 Still Not Working?

**Tell me:**
1. What do you see in the browser console when you submit?
2. Did you update the Apps Script code?
3. Did you run `setupSheet` again?
4. Does the `testRSVP` function work in Apps Script?
5. Any error messages?

**I'll help you debug it!** 🔍
