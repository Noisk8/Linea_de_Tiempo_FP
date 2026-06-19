import { Injectable, signal, inject, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translateService = inject(TranslateService);
  currentLang = signal<string>('es');

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('es');

    const savedLang = localStorage.getItem('lang');
    if (savedLang && ['es', 'en'].includes(savedLang)) {
      this.translateService.use(savedLang);
      this.currentLang.set(savedLang);
    } else {
      const browserLang = this.translateService.getBrowserLang();
      const langToUse = browserLang?.match(/en|es/) ? browserLang : 'es';
      this.translateService.use(langToUse);
      this.currentLang.set(langToUse);
    }

    this.document.documentElement.lang = this.currentLang();
  }

  toggleLanguage(): void {
    const nextLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.translateService.use(nextLang);
    this.currentLang.set(nextLang);
    localStorage.setItem('lang', nextLang);
    this.document.documentElement.lang = nextLang;
  }
}
