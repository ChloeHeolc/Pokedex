import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LISTEPOKEMONS } from 'src/db/listePokemons';
import { Pokemon } from '../model/pokemon';
import { LoadService } from '../service/load.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  listDePokemons = LISTEPOKEMONS;
  pokemon: Pokemon = new Pokemon(); // je crée une nouvelle instance de pokemon
  constructor(private activeRoute:ActivatedRoute, private route:Router, private loadService:LoadService) { }



  //recuperer le pokemon via son id, en recuperant le numero dans l'url
  //recuperer le pokemon qui a le meme id dans le tableau de pokemon
  //creer une fonction qui modifie ce pokemon et fait un retour sur la page detail en affichant le pokemon modifié
  ngOnInit(): void {
    let nombreUrl = this.activeRoute.snapshot.params['id'];
    this.pokemon = this.loadService.getPokemonById(nombreUrl);
  }
  back(){
  this.route.navigate(['']); // on redirige vers la page principale
  }
  validate(){
    this.route.navigate(['/detail',this.pokemon.id]);
  }
}
