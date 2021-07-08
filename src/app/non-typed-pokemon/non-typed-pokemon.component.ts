import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-non-typed-pokemon',
  templateUrl: './non-typed-pokemon.component.html'
})
export class NonTypedPokemonComponent {

  constructor(
    private pokemonService: PokemonService,
    private store: Store<any>) { }

  title = 'Não tipado';
  pokemonArray$ = this.pokemonService.pokemon$;
  pokemonStore$ = this.store.select('nonTypedPokemon');

  selectPokemon(): void {
    this.store.dispatch(
      { type: '[Non Typed Pokemon] Select information' }
    );
  }

  clearPokemon(): void {
    this.store.dispatch(
      { type: '[Non Typed Pokemon] Clear information' }
    );
  }
}
