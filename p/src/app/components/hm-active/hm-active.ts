import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Languages } from '../../services/languages/languages';

@Component({
  selector: 'app-hm-active',
  imports: [TranslatePipe],
  templateUrl: './hm-active.html',
  styleUrl: './hm-active.scss',
})
export class HmActive {
  language = inject(Languages);
}
