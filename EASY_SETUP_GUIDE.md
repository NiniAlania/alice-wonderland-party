# 🎯 SUPER EASY SETUP - Just Follow Along!

I've made this as easy as possible! Just follow these steps **exactly**.

---

## ⏱️ Total Time: 10 Minutes

---

## 📝 STEP 1: Create Google Sheet (2 minutes)

### 1.1 Open Google Sheets
- Go to: **https://sheets.google.com**
- Click the **"+ Blank"** button (big plus sign)

### 1.2 Name Your Sheet
- Click "Untitled spreadsheet" at the top
- Type: **Alice Party RSVPs**
- Press Enter

**Note:** If you already created the sheet earlier, you'll need to update it. Go back to Apps Script and run the `setupSheet` function again to update the headers.

✅ **Done!** Keep this tab open.

---

## 💻 STEP 2: Add the Magic Code (3 minutes)

### 2.1 Open Apps Script
- In your Google Sheet, click: **Extensions** → **Apps Script**
- A new tab will open (Apps Script editor)

### 2.2 Clear Default Code
- You'll see some gray code
- **Select ALL the code** (Cmd+A or Ctrl+A)
- **Delete it** (press Delete)

### 2.3 Copy My Code
- Go back to VS Code
- Open the file: **`GoogleAppsScript-RSVP-Handler.js`**
- **Select ALL** the code (Cmd+A or Ctrl+A)
- **Copy it** (Cmd+C or Ctrl+C)

### 2.4 Paste the Code
- Go back to Apps Script tab
- **Paste** the code (Cmd+V or Ctrl+V)
- Click the **💾 Save** icon (or Cmd+S)

✅ **Done!** The code is in place.

---

## ⚙️ STEP 3: Run Setup (2 minutes)

### 3.1 Select the Setup Function
- At the top of Apps Script, find the dropdown (it might show "setupSheet", "doPost", "testRSVP", etc.)
- Click it and select: **setupSheet** (you already see this one!)

### 3.2 Run It
- Click the **▶️ Run** button (play button)
- A popup will appear: **"Authorization required"**
- Click **"Review permissions"**

### 3.3 Grant Access
- Choose your Google account
- You'll see: "Google hasn't verified this app"
  - Click **"Advanced"**
  - Click **"Go to Untitled project (unsafe)"**
  - (Don't worry - this is YOUR code, it's safe!)
- Click **"Allow"**

### 3.4 See the Success Message
- After a few seconds, you'll see: **"✅ Setup Complete!"**
- Click **"OK"**

### 3.5 Check Your Sheet
- Go back to the Google Sheet tab
- You should see:
  - **Beautiful blue header row**
  - Column names: Timestamp, Name, Attendance, etc.
  - Sheet renamed to "Party RSVPs"

✅ **Done!** Your sheet is ready!

---

## 🧪 STEP 4: Test It (1 minute)

### 4.1 Test the Function
- Go back to Apps Script tab (or stay there if you're already there)
- Change the dropdown to: **testRSVP** (you already see this in the list!)
- Click the **▶️ Run** button
- You'll see: **"✅ Test Complete!"**
- Click **"OK"**

### 4.2 Check Your Sheet
- Go back to Google Sheet tab
- **Refresh the page** (F5 or Cmd+R)
- You should see a TEST RSVP row:
  ```
  Alice Wonderland | YES ✅ | 3 | The White Rabbit | Can't wait...
  ```

✅ **Done!** Everything is working!

---

## 🚀 STEP 5: Deploy (2 minutes)

### 5.1 Start Deployment
- In Apps Script tab, click: **Deploy** → **New deployment**

### 5.2 Select Type
- Click the **⚙️ gear icon** (next to "Select type")
- Select: **Web app**

### 5.3 Configure Deployment
Fill in these settings:
- **Description:** RSVP Handler
- **Execute as:** Me
- **Who has access:** Anyone

### 5.4 Deploy It
- Click **Deploy** button
- A popup appears with your **Web app URL**
- It looks like: `https://script.google.com/macros/s/ABC123.../exec`

### 5.5 Copy the URL
- Click the **📋 Copy** icon next to the URL
- **IMPORTANT:** Save this URL somewhere safe!
- Click **Done**

✅ **Done!** Your script is live on the internet!

---

## 🔗 STEP 6: Connect to Your Website (1 minute)

### 6.1 Open Your Code
In VS Code:
- Open: **`src/app/components/rsvp/rsvp.component.ts`**

### 6.2 Find Line 21
Look for this line:
```typescript
private readonly GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
```

### 6.3 Replace It
- Delete: `'YOUR_GOOGLE_SCRIPT_URL_HERE'`
- Paste your Web App URL (the one you copied)
- It should look like:
```typescript
private readonly GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABC123.../exec';
```

### 6.4 Save the File
- Press **Cmd+S** (Mac) or **Ctrl+S** (Windows)

✅ **DONE!** Everything is connected!

---

## 🎉 STEP 7: Test Your Website!

### 7.1 Open Your Site
- Go to: **http://localhost:4200**
- Scroll down to the RSVP form

### 7.2 Fill Out the Form
- Enter your name: "Test Guest"
- Select: "Yes! I'll be there! 🎊"
- Costume: "Cheshire Cat"
- Message: "Testing!"

### 7.3 Submit
- Click **"Send RSVP"**
- Wait for the loading animation
- You should see: **"Thank You!"** message

### 7.4 Check Google Sheet
- Go back to your Google Sheet tab
- **Refresh the page** (F5)
- **YOU SHOULD SEE YOUR TEST RSVP!** 🎊

---

## ✅ YOU'RE DONE!

If you see your test RSVP in the Google Sheet:
- ✅ Everything is working perfectly!
- ✅ Your form is live and collecting responses!
- ✅ Share your website with friends!

---

## 📊 BONUS: View Statistics

In your Google Sheet:
- Click: **"🎉 Party Manager"** menu (at the top)
- Click: **"📊 Show Statistics"**
- See how many people are coming!

---

## 🆘 Troubleshooting

### Problem: Authorization required
- **Solution:** Make sure you click "Advanced" → "Go to Untitled project"

### Problem: Don't see the test RSVP
- **Solution:** Refresh the Google Sheet page (F5)

### Problem: Form shows error message
- **Solution:** Double-check the Web App URL in line 21 of rsvp.component.ts

### Problem: Can't find the Deploy button
- **Solution:** Make sure you're in Apps Script (not Google Sheet)

---

## 📞 Need Help?

All the code is ready and working!

If you get stuck on ANY step:
1. Check which step number you're on
2. Re-read that step carefully
3. Try the troubleshooting section

The hardest part is usually the authorization - just remember to click "Advanced" and then "Go to Untitled project (unsafe)". It's safe because it's YOUR code!

---

## 🎊 That's It!

Now you have a professional RSVP tracking system!

Every time someone submits the form on your website, it will automatically appear in your Google Sheet with:
- Their name
- Whether they're coming
- What costume they'll wear
- Their message to you

**Happy party planning!** 🎉🐰✨🫖
