# 🎉 RSVP Setup Guide - Alice in Wonderland Birthday Invitation

Your RSVP form is now ready to send real emails! Follow these steps to set it up:

---

## 📧 Option 1: EmailJS (Recommended - Easiest!)

### Step 1: Create a Free EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Verify your email address

### Step 2: Set Up Email Service
1. After logging in, go to **Email Services**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the prompts to connect your email
5. Copy your **Service ID** (something like `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Set up your template like this:

**Subject:**
```
🎉 New RSVP: {{from_name}} has responded!
```

**Content:**
```
New RSVP Received for Alice in Wonderland Party!

From: {{from_name}}
Email: {{from_email}}

Attendance: {{attendance}}
Number of Guests: {{guest_count}}
Dressing as: {{character}}

Message:
{{message}}

---
Reply to this email to contact {{from_name}} at {{reply_to}}
```

4. Save the template and copy your **Template ID** (something like `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (something like `abcd1234efgh5678`)

### Step 5: Update Your Code
1. Open `/src/app/services/email.service.ts`
2. Replace the placeholder values:

```typescript
private SERVICE_ID = 'YOUR_SERVICE_ID';      // ← Paste Service ID
private TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // ← Paste Template ID
private PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // ← Paste Public Key
```

### Step 6: Test It!
1. Save the file
2. Your Angular app should auto-reload
3. Fill out the RSVP form and submit
4. Check your email inbox! 🎊

---

## 📊 Option 2: Google Sheets (Alternative)

If you prefer storing RSVPs in a spreadsheet:

### Step 1: Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Paste this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.attendance,
    data.guestCount,
    data.character,
    data.message
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as web app (Execute as: Me, Access: Anyone)
5. Copy the web app URL

### Step 2: Update Email Service
In `/src/app/services/email.service.ts`, update:

```typescript
const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
```

### Step 3: Use Google Sheets Method
In `/src/app/components/rsvp/rsvp.component.ts`, change:

```typescript
// Instead of:
const success = await this.emailService.sendRSVP(data);

// Use:
const success = await this.emailService.sendToGoogleSheets(data);
```

---

## 🔥 Option 3: Firebase (Most Powerful)

For a full database solution with admin dashboard:

### Step 1: Set Up Firebase
```bash
npm install firebase
```

### Step 2: Configure Firebase
1. Go to [firebase.google.com](https://firebase.google.com)
2. Create a new project
3. Add Firestore database
4. Get your config from Project Settings

### Step 3: Create Firebase Service
Create `/src/app/services/firebase.service.ts`:

```typescript
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db;
  
  constructor() {
    const app = initializeApp({
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      // ... other config
    });
    this.db = getFirestore(app);
  }
  
  async saveRSVP(data: any) {
    try {
      await addDoc(collection(this.db, 'rsvps'), {
        ...data,
        timestamp: new Date()
      });
      return true;
    } catch (error) {
      console.error('Error saving RSVP:', error);
      return false;
    }
  }
}
```

---

## 🎨 What You Get

Once configured, when someone submits the RSVP:
- ✅ You receive an email with all their details
- ✅ Guest sees a beautiful success message
- ✅ All data is captured and sent
- ✅ Works on mobile and desktop
- ✅ Loading states and error handling included

---

## 🐛 Troubleshooting

### "Failed to send RSVP"
- Double-check your Service ID, Template ID, and Public Key
- Make sure EmailJS service is connected to your email
- Check browser console for detailed error messages

### Email not arriving
- Check spam folder
- Verify email template is active
- Ensure your EmailJS account email is verified

### CORS errors
- EmailJS handles CORS automatically
- If using Google Sheets, make sure web app access is set to "Anyone"

---

## 🌟 Next Steps

After setup:
1. Test the form yourself first
2. Send the invitation link to a few friends to test
3. Monitor your inbox for RSVPs!
4. Consider adding:
   - Email confirmation to guests
   - Admin dashboard to view all RSVPs
   - Automatic calendar invites

---

## 💡 Tips

- EmailJS free plan allows **200 emails/month** (plenty for a party!)
- You can customize the email template design in EmailJS dashboard
- Consider setting up auto-reply emails to guests
- Export RSVPs from your email to a spreadsheet if needed

---

## 🎉 You're All Set!

Once you complete the setup, your magical Alice in Wonderland invitation will be fully functional! Guests can RSVP and you'll receive all their responses via email.

Need help? The error messages in the form will guide users, and the console will show detailed logs for debugging.

Happy party planning! 🎊✨🎩🫖
