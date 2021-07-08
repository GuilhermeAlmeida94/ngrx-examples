import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';
import { State } from './state/pokemon.reducer';
import * as PokemonActions from './state/pokemon.action';
import * as PokemonSelectors from './state/pokemon.selector';

@Component({
  selector: 'app-typed-select-pokemon',
  templateUrl: './typed-select-pokemon.component.html'
})
export class TypedSelectPokemonComponent {
  constructor(
    private pokemonService: PokemonService,
    private store: Store<State>) { }

  title = 'Tipado com seleção';
  pokemonArray$ = this.pokemonService.pokemon$;
  currentPokemon$ = this.store.select(PokemonSelectors.getCurrentPokemon);

  selectPokemon(pokemon: any): void {
    this.store.dispatch(PokemonActions.selectPokemon(pokemon));
  }

  clearPokemon(): void {
    this.store.dispatch(PokemonActions.clearPokemon());
  }
}
