import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { ButtonComponent } from '../../components/button/button';

@Component({
  imports: [HeaderComponent, FooterComponent, ButtonComponent],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class ContactComponent {}
