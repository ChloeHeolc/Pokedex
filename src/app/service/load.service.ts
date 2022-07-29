import { Injectable } from '@angular/core';
import { LISTEPOKEMONS } from 'src/db/listePokemons';
import { Pokemon } from '../model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  pokemon: Pokemon = new Pokemon();

  constructor() { }

  getPokemons() { // retourne la liste de tous les pokemons
      return LISTEPOKEMONS;
  }

  getPokemonById(params: any){ // retourne le pokemon dont l'id est passé en prametre
    for (let i = 0; i < this.getPokemons().length; i++){
      if (this.getPokemons()[i].id == params){
        this.pokemon = this.getPokemons()[i];
      }
    }
    return this.pokemon;
  }
}


//MEME CHOSE AVEC FILTER

//getPokemonById(id:number) {
//  return this.getPokemons().filter(pokemon => pokemon.id == id);
//}
