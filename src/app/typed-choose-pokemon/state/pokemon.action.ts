import { createAction, props } from '@ngrx/store';

export const choosePokemon = createAction('[Typed Choose Pokemon] Choose Pokemon', props<{ pokemon: any }>());
export const clearPokemon = createAction('[Typed Choose Pokemon] Clear Pokemon')
