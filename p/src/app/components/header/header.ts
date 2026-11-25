import { Component, inject, signal } from '@angular/core';
import { Languages } from '../../services/languages/languages';
import { TranslatePipe } from '@ngx-translate/core';
import { Window } from '../../services/window/window';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = inject(Languages);
  window = inject(Window);

  hamburgerMenu = signal(false);

  hamburgerMenuActive(change: boolean): void {
    if (this.hamburgerMenu() === false) {
      this.hamburgerMenu.set(true);
    }

    if (this.hamburgerMenu() === true) {
      this.hamburgerMenu.set(false);
    }
  }
}
