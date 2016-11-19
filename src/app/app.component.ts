import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  template: `
  {{title}}
  <app-databinding></app-databinding>
  <app-lifecycle></app-lifecycle>
  `, 
  styles: [`

  `]
})
export class AppComponent {
  title = 'Running...';
}
