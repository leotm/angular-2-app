import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  template: `
  {{title}}
  <app-databinding></app-databinding>
  <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
    <p>{{test}}<p>
  </app-lifecycle>
  <button (click)="delete = true">Click to Delete</button>
  <button (click)="test = 'Changed value'">Click to Change Content</button>
  <button (click)="boundValue = 2000">Click to Change Binding</button>
  `, 
  styles: [`

  `]
})
export class AppComponent {
  title = 'Running...';
  delete = false; 
  test = 'Starting value';
  boundValue = 1000;
}
