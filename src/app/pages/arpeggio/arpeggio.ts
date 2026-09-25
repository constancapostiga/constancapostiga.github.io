import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  imports: [HeaderComponent, FooterComponent, RouterLink],
  selector: 'app-arpeggio',
  styleUrl: './arpeggio.scss',
  templateUrl: './arpeggio.html',
})
export class ArpeggioPage {}
