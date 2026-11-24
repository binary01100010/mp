import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Languages {
  languageStatus = signal<'en' | 'de'>('en');
  languageDE = signal(true);
  languageEN = signal(false);

  changeLanguage(chooseLanguage: 'de' | 'en') {
    if (chooseLanguage === 'de') {
      this.languageDE.set(true);
      this.languageEN.set(false);
      this.languageStatus.set('de');
    }

    if (chooseLanguage === 'en') {
      this.languageDE.set(false);
      this.languageEN.set(true);
      this.languageStatus.set('en');
    }

    console.log(chooseLanguage);
  }
}
