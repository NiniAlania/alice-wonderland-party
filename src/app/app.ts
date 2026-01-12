import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RabbitHoleComponent } from './components/rabbit-hole/rabbit-hole.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RabbitHoleComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'aliceInWonderland';
  protected isMusicPlaying = false;
  private audio?: HTMLAudioElement;

  ngOnInit() {
    // Initialize audio with proper URL encoding for spaces
    const audioPath = "/Alice's Theme (From Alice in WonderlandSoundtrack Version).mp4";
    this.audio = new Audio(audioPath);
    this.audio.loop = true;
    this.audio.volume = 0.7; // 70% volume
    
    // Add event listeners for debugging
    this.audio.addEventListener('loadeddata', () => {
      console.log('Audio loaded successfully');
    });
    
    this.audio.addEventListener('error', (e) => {
      console.error('Audio loading error:', e);
      console.error('Attempted to load:', audioPath);
    });

    this.audio.addEventListener('play', () => {
      console.log('Audio started playing');
      this.isMusicPlaying = true;
    });
  }

  startMusicAndExperience() {
    // Start music when user follows the rabbit
    this.audio?.play()
      .then(() => {
        console.log('Music started - Following the White Rabbit!');
        this.isMusicPlaying = true;
      })
      .catch(error => {
        console.log('Could not start music:', error);
      });
  }

  toggleMusic() {
    if (!this.audio) {
      console.error('Audio not initialized');
      return;
    }

    console.log('Toggle clicked. Current state:', this.isMusicPlaying);

    if (this.isMusicPlaying) {
      this.audio.pause();
      this.isMusicPlaying = false;
      console.log('Music paused');
    } else {
      this.audio.play()
        .then(() => {
          this.isMusicPlaying = true;
          console.log('Music playing successfully');
        })
        .catch(error => {
          console.error('Audio play was prevented:', error);
          alert('Could not play audio. Please check console for details.');
        });
    }
  }
}
