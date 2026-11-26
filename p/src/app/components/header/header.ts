import { Component, inject, signal } from '@angular/core';
import { Languages } from '../../services/languages/languages';
import { TranslatePipe } from '@ngx-translate/core';
import { Hm } from '../../services/hm/hm';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = inject(Languages);
  hm = inject(Hm);
}
