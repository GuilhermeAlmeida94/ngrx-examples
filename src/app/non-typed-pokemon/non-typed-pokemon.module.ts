import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonTypedPokemonComponent } from './non-typed-pokemon.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './state/pokemon.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('nonTypedPokemon', pokemonReducer)
  ],
  exports: [NonTypedPokemonComponent],
  declarations: [NonTypedPokemonComponent]
})
export class NonTypedPokemonModule { }
