import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { TagStripComponent } from '../../components/tag-strip/tag-strip';


@Component({
  imports: [HeaderComponent, FooterComponent, TagStripComponent],
  selector: 'app-turismo',
  styleUrl: './turismo.scss',
  templateUrl: './turismo.html',
})
export class TurismoPage {
  readonly tags: string[] = [
    'Branding', 'Social Media', 'Stationery', 'Merch', 'Illustration', 'Packaging', 'Creative', 'Identity', 'Marketing', 'Digital', 'Campaign', 'UX/UI'
  ];
}
