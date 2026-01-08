import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email.config';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Configuration is loaded from email.config.ts
  // Update that file with your EmailJS credentials
  private SERVICE_ID = emailConfig.serviceId;
  private TEMPLATE_ID = emailConfig.templateId;
  private PUBLIC_KEY = emailConfig.publicKey;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendRSVP(formData: any): Promise<boolean> {
    try {
      // Prepare the email template parameters
      const templateParams = {
        to_name: 'Alice', // You can change this to your name
        from_name: formData.name,
        from_email: formData.email,
        attendance: formData.attendance === 'yes' ? 'YES - Will Attend! 🎉' : 'Cannot Attend 😢',
        guest_count: formData.attendance === 'yes' ? formData.guestCount : 'N/A',
        character: formData.character || 'Not specified',
        message: formData.message || 'No message provided',
        reply_to: formData.email
      };

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  // Alternative: Send to Google Sheets (you'd need to set up a Google Apps Script)
  async sendToGoogleSheets(formData: any): Promise<boolean> {
    // Placeholder for Google Sheets integration
    // You would need to create a Google Apps Script web app
    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL';
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      return true;
    } catch (error) {
      console.error('Failed to send to Google Sheets:', error);
      return false;
    }
  }
}
