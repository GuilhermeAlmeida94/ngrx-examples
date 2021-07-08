import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypedSelectPokemonComponent } from './typed-select-pokemon.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './state/pokemon.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('typedSelectPokemon', pokemonReducer)
  ],
  exports: [TypedSelectPokemonComponent],
  declarations: [TypedSelectPokemonComponent]
})
export class TypedSelectPokemonModule { }
