import { state } from '@angular/animations';
import { createReducer, createSelector, on } from '@ngrx/store';
import { increment, decrement, reset } from './magote.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0,
};

export const getValue = (state: CounterState) => state.value;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      value: state.value + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      value: state.value - 1,
    };
  }),
  on(reset, (state) => initialState)
);
