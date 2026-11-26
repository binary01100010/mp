import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hm {
  // Fenster mit Elementen
  hamburgerMenu = signal(false);
  // Icon Zeichen
  crossIcon = signal(false);
  widthInner: number = 0;
  // hm Icon
  widthInnerActive = signal(false);
  // Legal Notice footer
  legalNotice = signal(false);

  constructor() {
    this.currentWidthInner();
  }

  currentWidthInner(): void {
    setInterval(() => {
      this.widthInner = window.innerWidth;

      if (this.widthInner < 795) {
        this.widthInnerActive.set(true);
      }

      if (this.widthInner > 795) {
        this.widthInnerActive.set(false);
        this.hamburgerMenu.set(false);
        this.crossIcon.set(false);
      }

      if (this.widthInner < 390) {
        this.legalNotice.set(true);
      }
      if (this.widthInner > 390) {
        this.legalNotice.set(false);
      }
    }, 0.0001);
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
}
