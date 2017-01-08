import { Component } from '@angular/core';

@Component({
  selector: 'simple-tip',
  template: `
  <h1>SimpleTip</h1>
  <div>
    <label>Subtotal</label>
    <input type="number" [(ngModel)]="subtotal" (keyup)="subtotalChanged($event)">
  </div>
  <div>
    <input type="button" (click)="addTax()" [value]="taxTitle">
  </div>
  <div *ngIf="taxEnabled">
    <label>Tax</label>
    <input type="number" [(ngModel)]="tax">
  </div>
  <div>
    <label>Tip</label>
    <input type="number" [(ngModel)]="tipAmt">
  </div>
  <div>
    <label>Grand Total</label>
    <label>{{grandTotal}}</label>
  </div>
  `,
})
export class SimpleTip  { 
    subtotal = 0.0;
    tax = 0.0;
    tipAmt = 0.0;
    tipPercent = 0.0;
    grandTotal = 0.0;
    taxEnabled = false;
    taxTitle = "add Tax";
    addTax = function() {
        this.taxEnabled = !this.taxEnabled;
        this.taxTitle = this.taxEnabled ? "ignore Tax" : "add Tax";
    };
    subtotalChanged = function($event: any) {
        console.log(event)
        this.calculateGrandTotal();
    };
    calculateGrandTotal = function() {
        if(Number(this.subtotal)
            && Number(this.tipAmt)
            && Number(this.tax)) {
            this.grandTotal = Number(this.subtotal)
            + Number(this.tipAmt)
            + Number(this.tax)
        }
    }
}