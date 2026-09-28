import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class HeaderComponent {
  private router = inject(Router);
  isMenuOpen = false;

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToProjects(event: Event): void {
    event.preventDefault();
    this.closeMenu();

    const currentUrl = this.router.url.split('#')[0].split('?')[0];
    const isHome = currentUrl === '/' || currentUrl === '';

    if (isHome) {
      this.doScroll();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.doScroll(), 150);
      });
    }
  }

  private doScroll(): void {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
