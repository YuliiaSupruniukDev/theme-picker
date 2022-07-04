import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalculatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
