import { Component } from '@angular/core';

@Component({
  selector: 'simple-tip',
  template: `
  <div class="container">
  <h1 class="center">SimpleTip</h1>
  <div>
  <md-input-container>
    <input 
      md-input
      min="0.01" 
      step="0.01"
      #isubtotal 
      placeholder="Subtotal" 
      type="number" 
      [(ngModel)]="subtotal" 
      (ngModelChange)="subtotalChanged($event)" 
      moneyFormat>
  </md-input-container>
  </div>
  <div>
    <input 
      type="button" 
      class="btn btn-default btn-xs" 
      (click)="addTax()" 
      [value]="taxTitle">
  </div>
  <div *ngIf="taxEnabled">
    <md-input-container>
    <input 
      md-input 
      min="0.01" 
      step="0.01"
      #itax 
      placeholder="Tax" 
      type="number" 
      [(ngModel)]="tax" 
      (ngModelChange)="taxChanged($event)" 
      moneyFormat>
  </md-input-container>
  </div>
  <div>
    <md-input-container>
    <input 
      md-input 
      min="0.01" 
      step="0.01"
      #itip
      placeholder="Tip" 
      type="number" 
      [(ngModel)]="tipAmt" 
      (ngModelChange)="tipChanged($event)" 
      moneyFormat>
  </md-input-container>
  </div>
  <div>
    <md-radio-group [(ngModel)]="tipPercent" (ngModelChange)="tipPercentChanged($event)">
      <md-radio-button class="example-margin" value="0.15">
        15%
      </md-radio-button>
      <md-radio-button class="example-margin" value="0.18">
        18%
      </md-radio-button>
      <md-radio-button class="example-margin" value="0.20">
        20%
      </md-radio-button>
      <md-radio-button class="example-margin" value="0.22">
        22%
      </md-radio-button>
    </md-radio-group>
  <div>
    <md-input-container>
    <input 
      md-input 
      min="0.01" 
      step="0.01"
      #itotal
      placeholder="Grand Total" 
      type="number" 
      [(ngModel)]="grandTotal" 
      (ngModelChange)="grandTotalChanged($event)" 
      moneyFormat>
  </md-input-container>
  </div>
  </div>
  `,
})
export class SimpleTip  { 
    subtotal : number = null;
    tax : number = null;
    tipAmt : number = null;
    tipPercent : number = 0.20;
    grandTotal : number = null;
    taxEnabled = false;
    taxTitle = "add Tax";
    addTax = function() {
        this.taxEnabled = !this.taxEnabled;
        this.taxTitle = this.taxEnabled ? "ignore Tax" : "add Tax";
    };
    subtotalChanged = function($event: any) {
      this.calculateTip();
      this.calculateGrandTotal();
    };
    taxChanged = function($event: any) {
      this.calculateGrandTotal();
    }
    tipChanged = function($event: any) {
      this.tipPercent = null;
      this.calculateGrandTotal();
    };
    tipPercentChanged = function($event: any) {
      this.calculateTip();
      this.calculateGrandTotal();
    }
    grandTotalChanged = function($event: any) {
      this.tipAmt = Number(this.grandTotal) - Number(this.subtotal) - Number(this.tax);
    }
    calculateGrandTotal = function() {
        var sub = Number(this.subtotal);
        var tip = Number(this.tipAmt);
        var tax = Number(this.tax);
        
        if(sub > 0 ) {
          this.grandTotal = sub + tip + tax;
        }
    };
    calculateTip = function() {
      var sub = Number(this.subtotal);
      var tipPrcnt = Number(this.tipPercent);
      var grandTotal = Number(this.grandTotal);

      if(tipPrcnt > 0) {
        this.tipAmt = sub * tipPrcnt;
      } else if(grandTotal > 0) {
        this.tipAmt = grandTotal - Number(this.tax) - sub;
      }
    }
}