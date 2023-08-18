import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCountFeature = createFeatureSelector<{
  number: number;
  pikachu: {};
}>('count');

export const selectNumber = createSelector(
  selectCountFeature,
  (state) => state.number
);

export const selectPikachu = createSelector(
  selectCountFeature,
  (state) => state.pikachu
);
