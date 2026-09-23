import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MusicPlayerComponent } from '../music-player/music-player';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MusicPlayerComponent],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class HeaderComponent {
  isMenuOpen = false;
  closeMenu() { this.isMenuOpen = false; }
}
