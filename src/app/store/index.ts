import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';

export interface State {
  [fromAuth.authFeatureKey]: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
