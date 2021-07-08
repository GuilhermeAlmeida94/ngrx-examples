import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from './pokemon.reducer';

const getTypeSelectPokemonState = createFeatureSelector<PokemonState>('typedSelectPokemon');
export const getCurrentPokemon = createSelector(
    getTypeSelectPokemonState,
    state => state.currentPokemon
);
