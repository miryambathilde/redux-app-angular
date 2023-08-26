import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'redux-app';

  contador: number = 10;

  constructor () { }

  incrementar () {
    this.contador++;
  }

  decrementar () {
    this.contador--;
  }
}
