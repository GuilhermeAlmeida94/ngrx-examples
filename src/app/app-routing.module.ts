import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonTypedPokemonComponent } from './1-non-typed-pokemon/non-typed-pokemon.component';
import { NonTypedSelectPokemonComponent } from './2-non-typed-select-pokemon/non-typed-select-pokemon.component';
import { TypedSelectPokemonComponent } from './3-typed-select-pokemon/typed-select-pokemon.component';

const routes: Routes = [
  {
    path: 'non-typed-pokemon',
    component: NonTypedPokemonComponent
  },
  {
    path: 'non-typed-select-pokemon',
    component: NonTypedSelectPokemonComponent
  },
  {
    path: 'typed-select-pokemon',
    component: TypedSelectPokemonComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
