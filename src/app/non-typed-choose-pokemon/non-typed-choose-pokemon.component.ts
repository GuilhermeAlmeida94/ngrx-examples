import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-non-typed-choose-pokemon',
  templateUrl: './non-typed-choose-pokemon.component.html'
})
export class NonTypedChoosePokemonComponent {

  constructor(
    private pokemonService: PokemonService,
    private store: Store<any>) { }

  title = 'Não tipado com escolha';
  pokemonArray$ = this.pokemonService.pokemon$;
  pokemonStore$ = this.store.select('nonTypedChoosePokemon');

  selectPokemon(pokemon: any): void {
    this.store.dispatch(
      {
        type: '[Non Typed Choose Pokemon] Choose Pokemon',
        pokemon
      }
    );
  }

  clearPokemon(): void {
    this.store.dispatch(
      { type: '[Non Typed Choose Pokemon] Clear information' }
    );
  }

}
