import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { CurrencyFormatPipe } from '../pipes/currencyFormatPipe';

@Directive({ selector: "[moneyFormat]", providers: [CurrencyFormatPipe] })
export class MoneyFormatDirective implements OnInit {

  private el: HTMLInputElement;
  private moneyFormatPipe: CurrencyFormatPipe;

  constructor(private elementRef: ElementRef, private formatPipe: CurrencyFormatPipe) {
    this.el = this.elementRef.nativeElement;
    this.moneyFormatPipe = formatPipe;
  }

  ngOnInit() {
    this.el.value = this.moneyFormatPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value: any) {
    this.el.value = this.moneyFormatPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value: any) {
    this.el.value = this.moneyFormatPipe.transform(value);
  }

}