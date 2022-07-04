import { ButtonComponent } from './components/button/button.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { NgModule } from '@angular/core';
import { ResultOutputComponent } from './components/result-output/result-output.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';

@NgModule({
  declarations: [
    ResultOutputComponent,
    ButtonComponent,
    KeyboardComponent,
    CalculatorComponent,
    ThemePickerComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ResultOutputComponent,
    ButtonComponent,
    KeyboardComponent,
    CalculatorComponent,
  ],
})
export class CalculatorModule {}
