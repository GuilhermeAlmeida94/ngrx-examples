import { createAction, createReducer, on } from '@ngrx/store';

export const pokemonReducer = createReducer(
    { showPokemon: false },
    on(createAction('[Non Typed Pokemon] Show information'), state => {
        return {
            showPokemon: true
        };
    })
);
