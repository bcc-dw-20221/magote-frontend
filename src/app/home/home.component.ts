import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromMagote from '../store/magote.reducer';
import * as fromLoginSelectors from '../store/login/login.selectors';
import * as fromLoginActions from '../store/login/login.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  token: Observable<string>;

  constructor(private store: Store<fromMagote.MagoteState>) {
    this.token = this.store.select(fromLoginSelectors.selectAccessToken);
  }

  ngOnInit(): void {
    this.store.dispatch(
      fromLoginActions.login({ username: 'teste', password: '123456' })
    );
  }
}
