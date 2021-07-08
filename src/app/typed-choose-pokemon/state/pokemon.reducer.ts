import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.action';

export interface State {
    pokemon: PokemonState;
}

export interface PokemonState {
    currentPokemon: any;
}

const initialState: PokemonState = {
    currentPokemon: {}
};

export const pokemonReducer = createReducer(
    initialState,
    on(PokemonActions.choosePokemon, (state: PokemonState , action: any) => {
        return {
            ...state,
            currentPokemon: action
        } as PokemonState;
    })
);
