import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from './pokemon.reducer';

const getTypeChoosePokemonState = createFeatureSelector<PokemonState>('typedChoosePokemon');
export const getCurrentPokemon = createSelector(
    getTypeChoosePokemonState,
    state => state.currentPokemon
);
