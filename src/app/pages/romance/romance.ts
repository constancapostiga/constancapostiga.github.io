import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer';
import { HeaderComponent } from '../../components/header/header';
import { TagStripComponent } from '../../components/tag-strip/tag-strip';

@Component({
  imports: [FooterComponent, HeaderComponent, TagStripComponent],
  selector: 'app-romance',
  styleUrl: './romance.scss',
  templateUrl: './romance.html',
})
export class RomancePage {
  readonly tags: string[] = ['Packaging', 'Campaign', 'Illustration', 'Marketing', 'Motion'];
}
