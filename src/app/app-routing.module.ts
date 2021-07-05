import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonTypedChoosePokemonComponent } from './non-typed-choose-pokemon/non-typed-choose-pokemon.component';
import { NonTypedPokemonComponent } from './non-typed-pokemon/non-typed-pokemon.component';

const routes: Routes = [
  {
    path: 'non-typed-pokemon',
    component: NonTypedPokemonComponent
  },
  {
    path: 'non-typed-choose-pokemon',
    component: NonTypedChoosePokemonComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
