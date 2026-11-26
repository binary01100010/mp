import { Injectable, Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Languages {
  private translate = inject(TranslateService);

  languageStatus = signal<'en' | 'de'>('en');
  languageDE = signal(true);
  languageEN = signal(false);
  memoryLanguage = 'memoryLanguage';

  constructor() {
    this.getLanguage();
  }

  getLanguage() {
    let lsMemoryLanguage: string | null = '';
    if (localStorage.getItem(this.memoryLanguage) === null || undefined) {
      return;
    } else if (this.memoryLanguage) {
      lsMemoryLanguage = localStorage.getItem(this.memoryLanguage);
      if (lsMemoryLanguage === 'en') {
        this.changeLanguage('en');
      } else if (lsMemoryLanguage === 'de') {
        this.changeLanguage('de');
      }
    }
  }

  changeLanguage(chooseLanguage: 'de' | 'en'): void {
    if (chooseLanguage === 'de') {
      this.languageDE.set(true);
      this.languageEN.set(false);
      this.languageStatus.set('de');
      this.translate.use(chooseLanguage);
      localStorage.setItem(this.memoryLanguage, this.languageStatus());
    }

    if (chooseLanguage === 'en') {
      this.languageDE.set(false);
      this.languageEN.set(true);
      this.languageStatus.set('en');
      this.translate.use(chooseLanguage);
      localStorage.setItem(this.memoryLanguage, this.languageStatus());
    }

    console.log(chooseLanguage);
    return;
  }
}
