import { Component, Injector } from '@angular/core';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { AngularDayComponent } from './angular-day.component';

@Component({
  selector: 'my-app',
  styles: [`h1 { color: #dd0031 }`],
  template: `
    <h1>Welcome to the Angular Day!</h1>
    <div id="container"></div>
    <button (click)="addCustomElement()">Add Custom Element</button>
  `,
})
export class AppComponent {
  
  constructor(injector: Injector) {
    const el = createCustomElement(AngularDayComponent, { injector }); 
    customElements.define('angular-day', el);
  }

  addCustomElement() {
    const container = document.getElementById('container');
    container.innerHTML = '<angular-day></angular-day>';
  }
}
