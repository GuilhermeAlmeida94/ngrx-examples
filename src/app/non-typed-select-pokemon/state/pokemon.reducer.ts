import { createAction, createReducer, on, props } from '@ngrx/store';

export const pokemonReducer = createReducer(
    {
        currentPokemon: {}
    },
    on(createAction('[Non Typed Select Pokemon] Select Pokemon', props<{ pokemon: any }>()), (state, action) => {
        return {
            ...state,
            currentPokemon: action.pokemon
        };
    }),
    on(createAction('[Non Typed Select Pokemon] Clear information'), state => {
        return {
            ...state,
            currentPokemon: {}
        };
    })
);
