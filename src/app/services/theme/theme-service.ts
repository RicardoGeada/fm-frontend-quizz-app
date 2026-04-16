import { Injectable, signal } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<Theme>('light');

  constructor() {
    this.init();
    this.listenToSystemTheme();
  }

  private init() {
    const initialTheme = (window as any).__theme as Theme;
    if (initialTheme) this.theme.set(initialTheme);
  }

  /**
   * Sync with system theme if user has not chosen one
   */
  private listenToSystemTheme() {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addEventListener('change', (e) => {
      const hasUserPreference = localStorage.getItem('theme');

      if (!hasUserPreference) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }


  toggle() {
    const next = this.theme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }


  setTheme(theme: Theme) {
    this.theme.set(theme);
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }


  isDark() {
    return this.theme() === 'dark';
  }
}
