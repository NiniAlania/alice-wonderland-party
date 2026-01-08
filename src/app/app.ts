import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RabbitHoleComponent } from './components/rabbit-hole/rabbit-hole.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RabbitHoleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'aliceInWonderland';
}
