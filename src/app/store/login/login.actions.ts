import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[LOGIN] Login user.',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  '[LOGIN] Login user success.',
  props<{ token: string }>()
);
export const loginFail = createAction('[LOGIN] Login user failed.');
