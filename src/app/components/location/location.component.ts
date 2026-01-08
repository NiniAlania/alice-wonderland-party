import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  // Google Maps location link
  mapUrl = input<string>('https://maps.app.goo.gl/vFWyeKnrmE25KGDHA');
  
  openMap() {
    window.open(this.mapUrl(), '_blank');
  }
}
