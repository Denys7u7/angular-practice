import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  savePkachuInformation,
} from '../actions/counter.actions';

export const initialState = {
  number: 0,
  pikachu: {},
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, actions) => {
    return {
      ...state,
      number: state.number + actions.numberToIncrement,
    };
  }),
  on(decrement, (state, actions) => {
    return {
      ...state,
      number: state.number - actions.numberToDecrement,
    };
  }),
  on(reset, (state, actions) => {
    return {
      ...state,
      number: 0,
    };
  }),
  on(savePkachuInformation, (state, actions) => {
    return {
      ...state,
      pikachu: actions.pikachu,
    };
  })
);
