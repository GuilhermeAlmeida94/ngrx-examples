import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NonTypedPokemonModule } from './non-typed-pokemon/non-typed-pokemon.module';
import { NonTypedChoosePokemonModule } from './non-typed-choose-pokemon/non-typed-choose-pokemon.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    NonTypedPokemonModule,
    NonTypedChoosePokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
