import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <simple-tip>Loading SimpleTip</simple-tip>`,
})
export class AppComponent  { name = 'Angular'; }
