import { Component, OnInit } from '@angular/core';
import { Theme, themes } from 'src/assets/themes';

import { ThemeService } from './modules/calculator/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Themes';
  themes: Theme = themes;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setTheme('blue');
  }
}
