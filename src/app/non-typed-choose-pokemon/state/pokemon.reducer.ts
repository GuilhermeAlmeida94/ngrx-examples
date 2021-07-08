import { createAction, createReducer, on, props } from '@ngrx/store';

export const pokemonReducer = createReducer(
    {
        pokemon: {}
    },
    on(createAction('[Non Typed Choose Pokemon] Choose Pokemon', props<{ pokemon: any }>()), (state, action) => {
        return {
            ...state,
            pokemon: action.pokemon
        };
    })
);
