import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthEffects {
  authenticate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authenticate),
      concatMap(({ credentials }) =>
        this.authservice.login(credentials).pipe(
          map((tokens) => {
            // Para fins demonstrativos do endpoint verify, vou verificar uma token errada (adicionando um char)
            this.authservice
              .verify(tokens.access + '1')
              .pipe(take(1))
              .subscribe((val) => console.log(val));
            return AuthActions.authenticateSuccess({ tokens });
          }),
          catchError((error) => of(AuthActions.authenticateFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authservice: AuthService) {}
}
