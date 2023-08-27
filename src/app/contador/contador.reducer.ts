import { createReducer, on } from '@ngrx/store';
import { decrementar, incrementar, reset } from './contador.actions';

export const initialState = 20;

export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
)

/* import { Action } from '@ngrx/store';
import { decrementar, incrementar, reset } from './contador.actions';

export function contadorReducer (state: number = 10, action: Action) {
  switch (action.type) {
    case incrementar.type:
      return state + 1;
    case decrementar.type:
      return state - 1;
    case reset.type:
      return 0;
    default:
      return state;
  }
}
 */


