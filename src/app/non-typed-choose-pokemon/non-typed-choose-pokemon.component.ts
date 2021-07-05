import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-non-typed-choose-pokemon',
  templateUrl: './non-typed-choose-pokemon.component.html'
})
export class NonTypedChoosePokemonComponent implements OnInit{

  constructor(
    private pokemonService: PokemonService,
    private store: Store<any>) { }

  title = 'Não tipado com escolha';
  pokemonArray$ = this.pokemonService.pokemon$;
  pokemonStore$ = this.store.select('nonTypedChoosePokemon');

  ngOnInit(): void {
    this.pokemonArray$
      .subscribe(pokemonArray =>
        this.store.dispatch(
          {
            type: '[Non Typed Choose Pokemon] Add Pokemon Array',
            pokemonArray
          }
        )
      );
  }

  selectPokemon(pokemon: any): void {
    this.store.dispatch(
      {
        type: '[Non Typed Choose Pokemon] Choose Pokemon',
        pokemon
      }
    );
  }

}
