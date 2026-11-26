import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hm {
  hamburgerMenu = signal(false);
  crossIcon = signal(false);
  widthInner: number = 0;
  widthInnerActive = signal(false);

  constructor() {
    this.currentWidthInner();
  }

  hamburgerMenuActive(change: boolean): void {
    if (change === false) {
      this.hamburgerMenu.set(true);
      this.widthInnerActive.set(false);
      this.crossIcon.set(true);
    }

    if (change === true) {
      this.hamburgerMenu.set(false);
      this.widthInnerActive.set(true);
      this.crossIcon.set(false);
    }
  }

  currentWidthInner(): void {
    this.widthInner = window.innerWidth;

    if (this.widthInner < 695) {
      this.widthInnerActive.set(true);
    }

    if (this.widthInner > 695) {
      this.widthInnerActive.set(false);
      this.hamburgerMenu.set(false);
    }
  }
}
