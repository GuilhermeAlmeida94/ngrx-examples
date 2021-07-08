import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonTypedSelectPokemonComponent } from './non-typed-select-pokemon/non-typed-select-pokemon.component';
import { NonTypedPokemonComponent } from './non-typed-pokemon/non-typed-pokemon.component';
import { TypedSelectPokemonComponent } from './typed-select-pokemon/typed-select-pokemon.component';

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
