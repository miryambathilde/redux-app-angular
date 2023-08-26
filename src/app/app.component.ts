import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { Observable, of } from 'rxjs';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

  contador$!: Observable<number>

  constructor (private store: Store<AppState>) {
    // nos suscribimos a los cambios
    this.store.subscribe((state: AppState) => {
      console.log(state);
      this.contador$ = of(state.contador);
    });
  }

  incrementar () {
    this.store.dispatch(actions.incrementar());
  }

  decrementar () {
    this.store.dispatch(actions.decrementar());
  }
}
