import { createAction, createReducer, on, props } from '@ngrx/store';

export const pokemonReducer = createReducer(
    {
        pokemonArray: [],
        pokemon: {}
    },
    on(createAction('[Non Typed Choose Pokemon] Add Pokemon Array', props<{ pokemonArray: [] }>()), (state, action) => {
        return {
            ...state,
            pokemonArray: action.pokemonArray
        };
    }),
    on(createAction('[Non Typed Choose Pokemon] Choose Pokemon', props<{ pokemon: any }>()), (state, action) => {
        return {
            ...state,
            pokemon: action.pokemon
        };
    })
);
