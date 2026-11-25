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

  changeLanguage(chooseLanguage: 'de' | 'en'): void {
    if (chooseLanguage === 'de') {
      this.languageDE.set(true);
      this.languageEN.set(false);
      this.languageStatus.set('de');
      this.translate.use(chooseLanguage);
    }

    if (chooseLanguage === 'en') {
      this.languageDE.set(false);
      this.languageEN.set(true);
      this.languageStatus.set('en');
      this.translate.use(chooseLanguage);
    }

    console.log(chooseLanguage);
    return;
  }
}
