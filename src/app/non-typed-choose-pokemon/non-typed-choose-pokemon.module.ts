import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonTypedChoosePokemonComponent } from './non-typed-choose-pokemon.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './state/pokemon.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('nonTypedChoosePokemon', pokemonReducer)
  ],
  exports: [NonTypedChoosePokemonComponent],
  declarations: [NonTypedChoosePokemonComponent]
})
export class NonTypedChoosePokemonModule { }
