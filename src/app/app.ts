// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicPlayerComponent } from './components/music-player/music-player';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MusicPlayerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio';
}