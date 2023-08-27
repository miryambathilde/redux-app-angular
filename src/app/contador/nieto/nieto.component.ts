import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: [ './nieto.component.css' ]
})
export class NietoComponent implements OnInit {

  contador$!: Observable<number>

  constructor (private store: Store<AppState>) { }

  ngOnInit (): void {
    this.store.select('contador').subscribe(contador => {
      this.contador$ = of(contador);
    });
  }

  reset () {
    this.store.dispatch(actions.reset());
  }

}
