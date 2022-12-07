import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromAuthSelectors from '../store/selectors/auth.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  // Para fins de agilidade, o home exibirá tokens, caso existam, no seu template
  access: Observable<string> = new Observable<string>();
  refresh: Observable<string> = new Observable<string>();

  constructor(private store: Store) {
    this.access = this.store.select(fromAuthSelectors.selectAccessToken);
    this.refresh = this.store.select(fromAuthSelectors.selectRefreshToken);
  }

  ngOnInit(): void {}
}
