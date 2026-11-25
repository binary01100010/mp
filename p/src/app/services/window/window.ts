import { inject, Injectable, signal } from '@angular/core';
import { Hm } from '../hm/hm';

export interface windowData {
  widthInner: number;
}

@Injectable({
  providedIn: 'root',
})
export class Window {
  hm = inject(Hm);

  widthInner: number = 0;
  widthInnerActive = signal(false);

  constructor() {
    this.currentWidthInner();
  }

  currentWidthInner(): void {
    setInterval(() => {
      this.widthInner = window.innerWidth;

      if (this.widthInner < 695) {
        this.widthInnerActive.set(true);
      }

      if (this.widthInner > 695) {
        this.widthInnerActive.set(false);
        this.hm.hamburgerMenu.set(false);
      }
    }, 1);
  }
}
