import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-presentation',
  imports: [TranslatePipe],
  templateUrl: './main-presentation.html',
  styleUrl: './main-presentation.scss',
})
export class MainPresentation {}
