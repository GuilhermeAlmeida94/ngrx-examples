import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';
import { State } from './state/pokemon.reducer';
import * as PokemonActions from './state/pokemon.action';
import * as PokemonSelectors from './state/pokemon.selector';

@Component({
  selector: 'app-typed-choose-pokemon',
  templateUrl: './typed-choose-pokemon.component.html'
})
export class TypedChoosePokemonComponent {
  constructor(
    private pokemonService: PokemonService,
    private store: Store<State>) { }

  title = 'Tipado com escolha';
  pokemonArray$ = this.pokemonService.pokemon$;
  currentPokemon$ = this.store.select(PokemonSelectors.getCurrentPokemon);

  selectPokemon(pokemon: any): void {
    this.store.dispatch(PokemonActions.choosePokemon(pokemon));
  }
}
