import { Component, OnInit, signal, output } from '@angular/core';
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
  showFollowButton = signal(false);
  
  followRabbit = output<void>();
  
  ngOnInit() {
    // Start the entrance animation after a brief moment
    setTimeout(() => {
      this.isEntering.set(true);
    }, 500);
    
    // Show "Follow the White Rabbit" button after all fall animations complete
    // Longest animation is fallDown3 (4s) + delay (0.4s) + buffer (0.8s) = ~5.2s
    setTimeout(() => {
      this.showFollowButton.set(true);
    }, 5200);
  }
  
  skipAnimation() {
    this.isEntering.set(true);
    this.showFollowButton.set(true);
  }

  onFollowRabbit() {
    this.followRabbit.emit();
    this.showMainContent.set(true);
    this.showFollowButton.set(false);
  }
}
