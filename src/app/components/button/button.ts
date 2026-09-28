import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  readonly text = input<string>('');
  readonly routerLink = input<string | any[] | undefined>();
  readonly href = input<string | undefined>();
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly customClass = input<string>('');

  get baseClasses(): string {
    return `inline-flex items-center justify-center rounded-full bg-amber-200 px-8 py-3 text-base font-light font-['Outfit'] text-black hover:bg-stone-200 transition-colors cursor-pointer ${this.customClass()}`.trim();
  }
}
