import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-tag-strip',
  imports: [],
  templateUrl: './tag-strip.html',
  styleUrl: './tag-strip.scss',
})
export class TagStripComponent {
  /** Array of words/tags to display */
  readonly tags = input<string[]>([]);

  /** Scroll animation direction: 'left' (right-to-left) or 'right' (left-to-right) */
  readonly direction = input<'left' | 'right'>('left');

  /** Animation duration, e.g. '25s' */
  readonly speed = input<string>('25s');

  /**
   * If a page provides very few tags (e.g. 2-4 tags),
   * repeat them so the track always fills wide screens comfortably.
   */
  readonly repeatedTags = computed(() => {
    const list = this.tags();
    if (!list || list.length === 0) return [];

    // Target at least 10 items in a single set before duplicating for the 50% scroll loop
    const minItems = 10;
    const repeatCount = Math.max(1, Math.ceil(minItems / list.length));

    const result: string[] = [];
    for (let i = 0; i < repeatCount; i++) {
      result.push(...list);
    }
    return result;
  });
}
