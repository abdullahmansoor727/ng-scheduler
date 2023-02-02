import { Injectable } from '@angular/core';
import { Colors, ThemeMode } from '../constants/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  mode: ThemeMode = ThemeMode.LIGHT;

  constructor() {
    this.mode =
      (localStorage.getItem('themeMode') as ThemeMode) ?? ThemeMode.LIGHT;
    this.setThemeColors(this.mode);
  }

  changeTheme(mode: ThemeMode) {
    this.mode = mode;
    localStorage.setItem('themeMode', mode.toString());
    this.setThemeColors(mode);
  }

  setThemeColors(mode: ThemeMode) {
    var r: HTMLElement | null = document.querySelector(':root');
    Object.entries(Colors[mode]).forEach(([attr, value]) => {
      r?.style.setProperty(attr, value);
    });
  }
}
