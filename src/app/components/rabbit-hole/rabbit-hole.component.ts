import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { LocationComponent } from '../location/location.component';
import { DressCodeComponent } from '../dress-code/dress-code.component';
import { RsvpComponent } from '../rsvp/rsvp.component';

@Component({
  selector: 'app-rabbit-hole',
  standalone: true,
  imports: [CommonModule, CountdownTimerComponent, LocationComponent, DressCodeComponent, RsvpComponent],
  templateUrl: './rabbit-hole.component.html',
  styleUrl: './rabbit-hole.component.scss'
})
export class RabbitHoleComponent implements OnInit {
  isEntering = signal(false);
  showMainContent = signal(false);
  
  ngOnInit() {
    // Start the entrance animation after a brief moment
    setTimeout(() => {
      this.isEntering.set(true);
    }, 500);
    
    // Show main content after the fall animation completes
    setTimeout(() => {
      this.showMainContent.set(true);
    }, 4000);
  }
  
  skipAnimation() {
    this.isEntering.set(true);
    this.showMainContent.set(true);
  }
}
