import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <button (click)="onClicked()">Click me!</button>
  `,
  styles: [],
  outputs: ['clicked']
})
export class EventBindingComponent {
  clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit('It works!');
  }
}
