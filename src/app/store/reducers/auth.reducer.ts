import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  access: string;
  refresh: string;
}

export const initialState: AuthState = {
  access: '',
  refresh: '',
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.authenticateSuccess, (state, action) => ({
    ...state,
    ...action.tokens,
  })),
  on(AuthActions.authenticateFailure, (state, action) => state)
);
