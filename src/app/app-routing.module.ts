import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonTypedChoosePokemonComponent } from './non-typed-choose-pokemon/non-typed-choose-pokemon.component';
import { NonTypedPokemonComponent } from './non-typed-pokemon/non-typed-pokemon.component';
import { TypedChoosePokemonComponent } from './typed-choose-pokemon/typed-choose-pokemon.component';

const routes: Routes = [
  {
    path: 'non-typed-pokemon',
    component: NonTypedPokemonComponent
  },
  {
    path: 'non-typed-choose-pokemon',
    component: NonTypedChoosePokemonComponent
  },
  {
    path: 'typed-choose-pokemon',
    component: TypedChoosePokemonComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
