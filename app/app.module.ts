import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CurrencyFormatPipe } from './pipes/currencyFormatPipe'; 
import { MoneyFormatDirective } from './directives/moneyFormatDirective';

import { SimpleTip } from './components/simpleTip';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SimpleTip, CurrencyFormatPipe, MoneyFormatDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
