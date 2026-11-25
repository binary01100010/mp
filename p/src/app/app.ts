import { Component, inject, signal, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HmActive } from './components/hm-active/hm-active';
import { Hm } from './services/hm/hm';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, HmActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  hm = inject(Hm);
}
