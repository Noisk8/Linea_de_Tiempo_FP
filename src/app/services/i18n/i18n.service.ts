import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private translateService = inject(TranslateService);

  // Signal to easily react to language changes in components
  currentLang = signal<string>('es');

  constructor() {
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
      // Check browser language or default to es
      const browserLang = this.translateService.getBrowserLang();
      const langToUse = browserLang?.match(/en|es/) ? browserLang : 'es';
      this.translateService.use(langToUse);
      this.currentLang.set(langToUse);
    }
  }

  toggleLanguage(): void {
    const nextLang = this.currentLang() === 'es' ? 'en' : 'es';
    this.translateService.use(nextLang);
    this.currentLang.set(nextLang);
    localStorage.setItem('lang', nextLang);
  }
}
