# 📋 Quick Reference Card - RSVP Form

## 🚀 To Make Form Work (10 minutes):

### Step 1: Create Google Sheet
```
1. Go to: https://sheets.google.com/
2. Create new spreadsheet
3. Name it: "Alice in Wonderland Party RSVPs"
4. Add headers: Timestamp | Name | Attendance | Number of Guests | Costume/Character | Message
```

### Step 2: Create Apps Script
```
1. In your sheet: Extensions → Apps Script
2. Copy & paste the code from GOOGLE_SHEETS_SETUP.md
3. Save it
```

### Step 3: Deploy as Web App
```
1. Click Deploy → New deployment
2. Type: Web app
3. Execute as: Me
4. Who has access: Anyone
5. Copy the Web App URL
```

### Step 4: Update Your Code
```typescript
// File: src/app/components/rsvp/rsvp.component.ts
// Line 21: Replace this line:

private readonly GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

// With your actual URL:
private readonly GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec';
```

### Step 5: Test
```
1. Save the file
2. Go to http://localhost:4200
3. Fill out RSVP form
4. Check your Google Sheet - new row appears!
```

## � What You Get:

All RSVPs automatically in a Google Sheet:
- ✅ Name
- ✅ Attendance (Yes/No)
- ✅ Number of guests
- ✅ Costume they'll wear
- ✅ Personal message
- ✅ Timestamp

**No email required from guests!** Just their name.

## 📁 Files to Know:

```
/src/app/components/rsvp/rsvp.component.ts  👈 UPDATE LINE 21!
GOOGLE_SHEETS_SETUP.md                      (Full instructions with code)
```

## 🧪 Testing Without Setup:

Form works even without Google Sheets! It will:
- ✅ Validate inputs
- ✅ Show loading state
- ✅ Log to console
- ✅ Show success message (demo mode)

## 🎯 That's It!

Just create the sheet, deploy the script, and paste 1 URL!

---

**Need Help?** See GOOGLE_SHEETS_SETUP.md for detailed step-by-step instructions.
