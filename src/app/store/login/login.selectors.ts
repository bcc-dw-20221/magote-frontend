import { createSelector } from '@ngrx/store';
import { MagoteState } from '../magote.reducer';
import { LoginState } from './login.reducer';

export const selectLogin = (state: MagoteState) => state.login;

export const selectAccessToken = createSelector(
  selectLogin,
  (state: LoginState) => state.access_token
);
