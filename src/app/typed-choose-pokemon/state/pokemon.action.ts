import { createAction, props } from '@ngrx/store';

export const choosePokemon = createAction('[Typed Choose Pokemon] Choose Pokemon', props<{ pokemon: any }>());
