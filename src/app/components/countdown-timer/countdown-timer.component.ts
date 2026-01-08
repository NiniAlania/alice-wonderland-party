import { Component, OnInit, OnDestroy, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  // Party date: January 24th, 2026 at 8:00 PM - Alice in Wonderland Birthday Party!
  partyDate = input<Date>(new Date('2026-01-24T20:00:00')); // January 24th, 2026 at 8 PM
  
  timeRemaining = signal<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });
  
  private intervalId?: number;
  
  ngOnInit() {
    this.updateCountdown();
    // Update every second
    this.intervalId = window.setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
  
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  
  private updateCountdown() {
    const now = new Date().getTime();
    const targetDate = this.partyDate().getTime();
    const distance = targetDate - now;
    
    if (distance < 0) {
      this.timeRemaining.set({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    this.timeRemaining.set({
      days,
      hours,
      minutes,
      seconds,
      expired: false
    });
  }
  
  getFormattedDate(): string {
    const date = this.partyDate();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  }
}
