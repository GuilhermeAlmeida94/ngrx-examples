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
    on(PokemonActions.choosePokemon, (state: PokemonState, pokemon: any) => {
        return {
            ...state,
            currentPokemon: pokemon
        } as PokemonState;
    }),
    on(PokemonActions.clearPokemon, (state: PokemonState) => {
        return {
            ...state,
            currentPokemon: {}
        } as PokemonState;
    })
);
