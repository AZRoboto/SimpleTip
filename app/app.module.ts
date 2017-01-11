import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { CurrencyFormatPipe } from './pipes/currencyFormatPipe'; 
import { MoneyFormatDirective } from './directives/moneyFormatDirective';

import { SimpleTip } from './components/simpleTip';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule.forRoot(), FormsModule ],
  declarations: [ AppComponent, SimpleTip, CurrencyFormatPipe, MoneyFormatDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
