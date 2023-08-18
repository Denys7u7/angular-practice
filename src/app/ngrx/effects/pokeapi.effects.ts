import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { exhaustMap, map } from 'rxjs/operators';
import {
  getPikachuInformation,
  savePkachuInformation,
} from '../actions/counter.actions';

@Injectable()
export class PokeapiEffects {
  getPikachuInformation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPikachuInformation),
      exhaustMap(() =>
        this.pokeapiService
          .getPikachuInformation()
          .pipe(map((success) => savePkachuInformation({ pikachu: success })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokeapiService: PokeapiService
  ) {}
}
