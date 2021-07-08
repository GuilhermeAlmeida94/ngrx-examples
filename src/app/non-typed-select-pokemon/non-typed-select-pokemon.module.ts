import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonTypedSelectPokemonComponent } from './non-typed-select-pokemon.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './state/pokemon.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('nonTypedSelectPokemon', pokemonReducer)
  ],
  exports: [NonTypedSelectPokemonComponent],
  declarations: [NonTypedSelectPokemonComponent]
})
export class NonTypedSelectPokemonModule { }
