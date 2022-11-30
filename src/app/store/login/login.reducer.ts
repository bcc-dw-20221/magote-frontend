import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './login.actions';

export interface LoginState {
  access_token: string;
}

export const initialState: LoginState = {
  access_token: '',
};

export const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      access_token: action.token,
    };
  })
);
