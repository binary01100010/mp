import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hm {
  hamburgerMenu = signal(false);

  hamburgerMenuActive(change: boolean): void {
    if (change === false) {
      this.hamburgerMenu.set(true);
    }

    if (change === true) {
      this.hamburgerMenu.set(false);
    }
  }
}
