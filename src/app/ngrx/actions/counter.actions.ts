import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter Component] Increment',
  props<{ numberToIncrement: number }>()
);
export const decrement = createAction(
  '[Counter Component] Decrement',
  props<{ numberToDecrement: number }>()
);
export const reset = createAction('[Counter Component] Reset');
export const getPikachuInformation = createAction(
  '[Pokeapi test] Get information'
);
export const savePkachuInformation = createAction(
  '[Pokeapi test] Save information',
  props<{ pikachu: {} }>()
);
