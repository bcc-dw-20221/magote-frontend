import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../store/magote.actions';
import * as fromMagote from '../store/magote.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  number: Observable<number>;

  constructor(private store: Store<fromMagote.CounterState>) {
    this.number = this.store.select(fromMagote.getValue);
  }

  ngOnInit(): void {
    this.store.dispatch(increment());
  }
}
