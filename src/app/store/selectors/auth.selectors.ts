import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectAccessToken = createSelector(
  selectAuthState,
  (state: fromAuth.AuthState) => state.access
);

export const selectRefreshToken = createSelector(
  selectAuthState,
  (state: fromAuth.AuthState) => state.refresh
);
