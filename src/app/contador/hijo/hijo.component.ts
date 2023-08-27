import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: [ './hijo.component.css' ]
})
export class HijoComponent implements OnInit {

  contador$!: Observable<number>

  constructor (private store: Store<AppState>) { }

  ngOnInit (): void {
    this.store.select('contador').subscribe(contador => {
      this.contador$ = of(contador);
    });
  }

  multiplicar () {
    this.store.dispatch(actions.multiplicar({ numero: 5 }));
  }

  dividir () {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }
}
