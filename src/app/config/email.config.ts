/**
 * Email Service Configuration
 * 
 * To make the RSVP form functional:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Set up your email service
 * 3. Create an email template
 * 4. Replace the values below with your actual credentials
 * 
 * See RSVP_SETUP_GUIDE.md for detailed instructions
 */

export const emailConfig = {
  // Your EmailJS Service ID (from Email Services page)
  serviceId: 'YOUR_SERVICE_ID',
  
  // Your EmailJS Template ID (from Email Templates page)
  templateId: 'YOUR_TEMPLATE_ID',
  
  // Your EmailJS Public Key (from Account > General)
  publicKey: 'YOUR_PUBLIC_KEY'
};

// Example values (these won't work, replace with your own):
// serviceId: 'service_abc123',
// templateId: 'template_xyz789',
// publicKey: 'abcd1234efgh5678'
