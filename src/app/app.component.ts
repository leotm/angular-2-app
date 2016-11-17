import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  template: `
  {{title}}
  <app-databinding></app-databinding>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'Running...';
}
