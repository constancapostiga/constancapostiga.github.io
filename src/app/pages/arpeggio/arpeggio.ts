import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { TagStripComponent } from '../../components/tag-strip/tag-strip';


@Component({
  imports: [HeaderComponent, FooterComponent, TagStripComponent],
  selector: 'app-arpeggio',
  styleUrl: './arpeggio.scss',
  templateUrl: './arpeggio.html',
})
export class ArpeggioPage {
  readonly tags: string[] = [
    'Branding', 'Social Media', 'Stationery', 'Merch', 'Illustration', 'Packaging', 'Creative', 'Identity', 'Marketing', 'Digital', 'Campaign', 'Logo'
  ];
}
