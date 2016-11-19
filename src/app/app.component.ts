import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  template: `
  {{title}}
  <app-databinding></app-databinding>
  <app-lifecycle *ngIf="!delete"></app-lifecycle>
  <button (click)="delete = true">Click to Delete</button>
  `, 
  styles: [`

  `]
})
export class AppComponent {
  title = 'Running...';
  delete = false; 
}
