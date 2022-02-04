import { Component } from '@angular/core';
import { Gato } from './gato';

@Component({
  selector: 'app-root',
  //template: '<h1>Pepe</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gatos1';
  name = 'Miguel'
}
