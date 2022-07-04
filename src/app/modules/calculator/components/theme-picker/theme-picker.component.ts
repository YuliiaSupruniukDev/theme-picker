import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { themes } from 'src/assets/themes';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss'],
})
export class ThemePickerComponent {
  themes = themes;
  themesList = Object.keys(themes);

  constructor(private themeService: ThemeService) {}

  setTheme(event: any) {
    const theme = event.target.value;
    this.themeService.setTheme(theme);
  }
}
