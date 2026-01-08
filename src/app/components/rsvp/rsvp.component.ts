import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RSVPForm {
  name: string;
  attendance: 'yes' | 'no' | '';
  guestCount: number;
  character: string;
  message: string;
}

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {
  // ⚠️ IMPORTANT: Replace this with your Google Apps Script Web App URL
  // See GOOGLE_SHEETS_SETUP.md for instructions
  private readonly GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxGvOsmcVI4ryDIvrUj3DQce6ggfjDIdhLiIlr5tEaUc9YoiHypjvoBIXpaBVSm-ovkHg/exec';
  
  formData = signal<RSVPForm>({
    name: '',
    attendance: '',
    guestCount: 1, // Hidden field - always sends 1
    character: '',
    message: ''
  });
  
  submitted = signal(false);
  submitting = signal(false);
  error = signal('');
  
  async onSubmit() {
    const data = this.formData();
    
    // Basic validation - only name and attendance required
    if (!data.name || !data.attendance) {
      this.error.set('Please fill in your name and whether you can attend');
      return;
    }
    
    this.submitting.set(true);
    this.error.set('');
    
    try {
      // Send to Google Sheets
      console.log('📤 Sending RSVP to Google Sheets...', data);
      console.log('🔗 URL:', this.GOOGLE_SCRIPT_URL);
      
      const response = await fetch(this.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      // With no-cors mode, we can't read the response
      // So we assume success if no error was thrown
      this.submitted.set(true);
      console.log('✅ RSVP sent successfully to Google Sheets!');
      
    } catch (err) {
      console.error('Error submitting RSVP:', err);
      this.error.set('An error occurred. Please try again later.');
    } finally {
      this.submitting.set(false);
    }
  }
  
  updateField(field: keyof RSVPForm, value: any) {
    this.formData.update(current => ({
      ...current,
      [field]: value
    }));
  }
  
  resetForm() {
    this.formData.set({
      name: '',
      attendance: '',
      guestCount: 1, // Reset to default 1
      character: '',
      message: ''
    });
    this.submitted.set(false);
  }
}
