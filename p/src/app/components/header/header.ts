import { Component, inject } from '@angular/core';
import { Languages } from '../../services/languages';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = inject(Languages);
}
