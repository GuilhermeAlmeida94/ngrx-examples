import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { NonTypedPokemonModule } from './non-typed-pokemon/non-typed-pokemon.module';
import { NonTypedSelectPokemonModule } from './non-typed-select-pokemon/non-typed-select-pokemon.module';
import { TypedSelectPokemonModule } from './typed-select-pokemon/typed-select-pokemon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    NonTypedPokemonModule,
    NonTypedSelectPokemonModule,
    TypedSelectPokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
