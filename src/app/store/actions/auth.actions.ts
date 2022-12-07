import { createAction, props } from '@ngrx/store';
import { Credentials, Tokens } from 'src/models/authentication';

export const authenticate = createAction(
  '[Auth] Authenticate',
  props<{ credentials: Credentials }>()
);

export const authenticateSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ tokens: Tokens }>()
);

export const authenticateFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);
