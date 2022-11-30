import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { loginReducer, LoginState } from './login/login.reducer';

export interface MagoteState {
  login: LoginState;
}

export const AppReducer: ActionReducerMap<MagoteState> = {
  login: loginReducer,
};
