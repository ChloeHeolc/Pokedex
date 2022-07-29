import { Component, OnInit } from '@angular/core';
import { LoadService } from '../service/load.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listDePokemons: any;
  constructor(private loadService: LoadService) { }

  ngOnInit(): void {
    this.listDePokemons = this.loadService.getPokemons();
  }

  filterPokemon(value:string){
    this.listDePokemons = this.loadService.getPokemons().filter(pokemon => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase())
    })
    /*
    this.listDePokemons = LISTEPOKEMONS;
    for(let i = this.listDePokemons.length-1; i >=0; i--){
      if (this.listDePokemons[i].name.toLowerCase().includes(value.toLowerCase())){

      }else{
        this.listDePokemons.splice(i,1)
      }
    }
*/
  }

}


