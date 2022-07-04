import { Theme, themes } from 'src/assets/themes';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: Theme = themes;

  constructor() {}

  setTheme(pickedTheme: string) {
    themes[pickedTheme].forEach((data) => {
      document.documentElement.style.setProperty(`--${data.name}`, data.value);
    });
  }
}
