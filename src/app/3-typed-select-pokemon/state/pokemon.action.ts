import { createAction, props } from '@ngrx/store';

export const selectPokemon = createAction('[Typed Select Pokemon] Select Pokemon', props<{ pokemon: any }>());
export const clearPokemon = createAction('[Typed Select Pokemon] Clear Pokemon');
