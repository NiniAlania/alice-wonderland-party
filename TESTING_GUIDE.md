# 🧪 Testing the RSVP Form Locally

Want to test the form before setting up EmailJS? Here's how:

## Quick Test Mode

The form will work even without EmailJS configured! Here's what happens:

### Without EmailJS Setup
- Form validates all inputs ✅
- Shows loading state ✅
- Logs data to browser console ✅
- Shows error message (because EmailJS isn't configured) ⚠️

### With EmailJS Setup
- All of the above ✅
- Actually sends you an email ✅
- Shows success message ✅

## Testing Steps

### 1. Start the Development Server
```bash
npm start
```

### 2. Open Browser Console
- **Chrome/Edge**: Press `F12` or `Cmd+Option+J` (Mac)
- Navigate to the **Console** tab

### 3. Fill Out the Form
- Enter any test data
- Click "Send RSVP"

### 4. Check Console Output
You should see:
```
RSVP Form Data: {
  name: "Test User",
  email: "test@example.com",
  attendance: "yes",
  guestCount: 2,
  character: "Mad Hatter",
  message: "Can't wait!"
}
```

### 5. You'll See Error Message
Since EmailJS isn't configured yet, you'll see:
> ⚠️ Failed to send RSVP. Please try again or contact us directly.

**This is normal!** It means the form validation works.

## What to Test

### ✅ Form Validation
- [ ] Name field is required
- [ ] Email field validates email format
- [ ] Must select "Yes" or "No" for attendance
- [ ] Guest count and character fields only show when "Yes" is selected
- [ ] Submit button disables while sending

### ✅ UI/UX
- [ ] Form looks good on desktop
- [ ] Form looks good on mobile (resize browser)
- [ ] Animations work smoothly
- [ ] Loading spinner appears when submitting
- [ ] Error message displays with shake animation
- [ ] Success message shows after successful submission

### ✅ Responsive Design
Test these screen sizes:
- **Desktop**: 1920px, 1440px, 1024px
- **Tablet**: 768px, 820px
- **Mobile**: 375px, 390px, 430px

## Mock Data for Testing

Use these test entries:

### Test 1: Attending Guest
```
Name: Alice Wonderland
Email: alice@wonderland.com
Attendance: Yes
Guests: 3
Character: The White Rabbit
Message: Can't wait to fall down the rabbit hole!
```

### Test 2: Cannot Attend
```
Name: Queen of Hearts
Email: queen@hearts.com
Attendance: No
Message: Sorry, too busy painting roses red!
```

### Test 3: Simple RSVP
```
Name: Cheshire Cat
Email: cheshire@wonderland.com
Attendance: Yes
Guests: 1
Character: (leave blank)
Message: (leave blank)
```

## Debugging Tips

### Form Not Submitting?
1. Check browser console for errors
2. Make sure all required fields are filled
3. Try refreshing the page

### Error Message Stuck?
- Click "Submit Another Response" to reset
- Refresh the page

### Success Message Not Showing?
- This is expected without EmailJS setup
- The service will return `false` because credentials are missing
- Once EmailJS is configured, it will work!

## Ready for Real Testing?

Once you've tested locally and everything looks good:

1. Follow **RSVP_SETUP_GUIDE.md** to set up EmailJS
2. Update `/src/app/config/email.config.ts` with your credentials
3. Test again - this time you should receive a real email!
4. Share the site with friends and family

## Console Commands for Testing

Want to test the service directly? Open browser console and try:

```javascript
// Get the RSVP component instance (when on the page)
const component = ng.getComponent(document.querySelector('app-rsvp'));

// Check current form data
console.log(component.formData());

// Manually trigger submission (for testing)
component.onSubmit();
```

## Next Steps

- ✅ Test form validation
- ✅ Test responsive design
- ✅ Test all user flows
- ⏭️ Set up EmailJS (see RSVP_SETUP_GUIDE.md)
- ⏭️ Test with real email
- ⏭️ Send to friends!

---

Happy testing! 🎉🐰🎩
