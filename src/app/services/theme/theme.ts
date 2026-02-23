import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches);
      }
    });
  }

  toggleTheme(): void {
    this.setTheme(!this.isDarkMode());
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
  }

  private setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}
