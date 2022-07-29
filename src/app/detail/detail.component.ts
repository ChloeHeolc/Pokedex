
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../model/pokemon';
import { LoadService } from '../service/load.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pokemon: Pokemon = new Pokemon(); // je crée une nouvelle instance de pokemon
  
  constructor(private activeRoute:ActivatedRoute, private route:Router, private loadService:LoadService) { }



  ngOnInit(): void { //lorsque la page est chargé on execute la fonction ngOnInit et le code qui est dedans
    //1-j'ai besoin de recupererr le numr quiest dans l'url
    let nombreUrl = this.activeRoute.snapshot.params['id'];

      this.pokemon = this.loadService.getPokemonById(nombreUrl);
}

  edit(){
    this.route.navigate(['/edit',this.pokemon.id]);
}

  back(){
    this.route.navigate(['']); // on redirige vers la page principale
  }

  remove(){
    console.log("suppression");
      const index = this.loadService.getPokemons().indexOf(this.pokemon, 0); // on recupere l'index du pokemon dans la liste
      if(index > -1){ // si l'index est superieur
        this.loadService.getPokemons().splice(index,1);
      }
      this.back();
        //recuperer le pokemon
    //supprimer le pokemon du tableau de pokemons
    // rediriger vers la page d'accueil
  }

}


