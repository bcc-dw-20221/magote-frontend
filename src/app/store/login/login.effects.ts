import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import * as fromLoginActions from '../login/login.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromLoginActions.login),
      mergeMap((action) =>
        this.api.login(action.username, action.password).pipe(
          map((data) => {
            return fromLoginActions.loginSuccess({ token: data });
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private api: LoginService) {}
}
