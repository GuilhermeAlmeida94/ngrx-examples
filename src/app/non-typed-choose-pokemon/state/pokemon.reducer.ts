import { createAction, createReducer, on, props } from '@ngrx/store';

export const pokemonReducer = createReducer(
    {
        currentPokemon: {}
    },
    on(createAction('[Non Typed Choose Pokemon] Choose Pokemon', props<{ pokemon: any }>()), (state, action) => {
        return {
            ...state,
            currentPokemon: action.pokemon
        };
    })
);
