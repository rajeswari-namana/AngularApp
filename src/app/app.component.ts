import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-servers></app-servers>
          <app-servers></app-servers>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'raji';
}
