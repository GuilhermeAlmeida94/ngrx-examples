import { createAction, createReducer, on } from '@ngrx/store';

export const pokemonReducer = createReducer(
    { showPokemon: false },
    on(createAction('[Non Typed Pokemon] Select information'), state => {
        return {
            ...state,
            showPokemon: true
        };
    }),
    on(createAction('[Non Typed Pokemon] Clear information'), state => {
        return {
            ...state,
            showPokemon: false
        };
    })
);
