import { Injectable, signal } from '@angular/core';

export interface windowData {
  widthInner: number;
}

@Injectable({
  providedIn: 'root',
})
export class Window {
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
      }
    }, 1);
  }
}
