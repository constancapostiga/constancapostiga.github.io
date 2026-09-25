import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

interface Project {
  image: string;
  title: string;
  description: string;
  redirect_to: string;
  year: number;
}

@Component({
  imports: [HeaderComponent, RouterLink, FooterComponent],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class HomeComponent {
  readonly scrollY = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  /** Upper-left star rotates clockwise with scroll */
  get starTopRotation(): string {
    return `rotate(${this.scrollY() * 0.2}deg)`;
  }

  /** Bottom-right star rotates counter-clockwise with scroll */
  get starBottomRotation(): string {
    return `rotate(${-this.scrollY() * 0.2}deg)`;
  }

  readonly tags: string[] = [
    'Branding', 'Social Media', 'Stationery', 'Merch',
    'Illustration', 'UX/UI', 'Packaging', 'Creative',
    'Identity', 'Marketing', 'Digital', 'Campaign',
  ];

  readonly projects: Project[] = [
    {
      image: '/images/arpeggio.png',
      title: 'ARPEGGIO MUSIC STORE',
      description:
        'Arpeggio is a university project focused on the development of a visual identity for a fictional music store based in Porto. The project involved creating the brand concept, logo and visual language, as well as developing a range of applications such as stationery and merchandise. The goal was to create a playful and contemporary identity that would appeal to a young audience and bring the idea of experiencing and living music into the brand.',
      redirect_to: '/arpeggio',
      year: 2025,
    },
    {
      image: '/images/cafe.png',
      title: 'BAR - PRAIA DO TURISMO',
      description:
        'Praia do Turismo is a university project focused on developing an alternative visual identity for a real seasonal beach bar located in Vila do Conde. As my first experience working with a real client, the project involved researching the brand and its audience, developing a new logo and visual identity, and applying it across a variety of physical and digital touchpoints. The goal was building a more cohesive and contemporary identity while maintaining the character of the space.',
      redirect_to: '/praia-do-turismo',
      year: 2026,
    },
    {
      image: '/images/gel.png',
      title: 'ROMANCE ICE CREAM',
      description:
        'Romance is a university packaging and campaign project exploring a fictional special edition of Continente’s ice cream cups. Created around the theme of love and Valentine’s Day, the project involved developing a new visual identity for a three-flavour collection, including Strawberry and Chocolate, Blueberry Cheesecake and Red Velvet Cake. I created a geometric pattern and individual colour palettes to connect the three packages while giving each flavour its own identity.',
      redirect_to: '/romance-ice-cream',
      year: 2025,
    },
  ];
}
