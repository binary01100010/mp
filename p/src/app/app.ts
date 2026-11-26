import { Component, inject, signal, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HmActive } from './components/hm-active/hm-active';
import { Hm } from './services/hm/hm';
import { MainPresentation } from './components/main-presentation/main-presentation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, HmActive, MainPresentation],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  hm = inject(Hm);
}
