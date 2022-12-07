import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Credentials } from 'src/models/authentication';
import * as fromAuthActions from '../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {}

  doLogin(): void {
    this.store.dispatch(
      fromAuthActions.authenticate({
        credentials: new Credentials(this.username, this.password),
      })
    );
  }
}
