import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  getPikachuInformation,
  increment,
  reset,
} from 'src/app/ngrx/actions/counter.actions';
import {
  selectNumber,
  selectPikachu,
} from 'src/app/ngrx/selectors/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss'],
})
export class MyCounterComponent {
  count$ = this.store.select(selectNumber);
  pikachu$ = this.store.select(selectPikachu);

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ numberToIncrement: 2 }));
  }

  decrement() {
    this.store.dispatch(decrement({ numberToDecrement: 2 }));
  }

  reset() {
    this.store.dispatch(reset());
  }

  getPikachuInf() {
    this.store.dispatch(getPikachuInformation());
  }
}
