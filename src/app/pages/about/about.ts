import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  imports: [HeaderComponent, FooterComponent],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class AboutComponent {}
