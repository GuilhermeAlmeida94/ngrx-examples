import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  pokemon$ = of([
    { id: 1, name: 'Bulbasaur',  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    { id: 4, name: 'Charmander',  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    { id: 7, name: 'Squirtle',  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
    { id: 25, name: 'Pikachu',  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'},
  ]);
}
