import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-non-typed-select-pokemon',
  templateUrl: './non-typed-select-pokemon.component.html'
})
export class NonTypedSelectPokemonComponent {

  constructor(
    private pokemonService: PokemonService,
    private store: Store<any>) { }

  title = 'Não tipado com seleção';
  pokemonArray$ = this.pokemonService.pokemon$;
  pokemonStore$ = this.store.select('nonTypedSelectPokemon');

  selectPokemon(pokemon: any): void {
    this.store.dispatch(
      {
        type: '[Non Typed Select Pokemon] Select Pokemon',
        pokemon
      }
    );
  }

  clearPokemon(): void {
    this.store.dispatch(
      { type: '[Non Typed Select Pokemon] Clear information' }
    );
  }

}
