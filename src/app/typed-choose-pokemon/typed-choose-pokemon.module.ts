import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypedChoosePokemonComponent } from './typed-choose-pokemon.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './state/pokemon.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('typedChoosePokemon', pokemonReducer)
  ],
  exports: [TypedChoosePokemonComponent],
  declarations: [TypedChoosePokemonComponent]
})
export class TypedChoosePokemonModule { }
