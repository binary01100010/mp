import { Component, inject } from '@angular/core';
import { Hm } from '../../services/hm/hm';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  hm = inject(Hm);
}
