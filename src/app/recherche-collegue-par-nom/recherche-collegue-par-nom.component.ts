import { Component, OnInit } from '@angular/core';
import {listeMatricule} from '../mock/matricule.mock';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matricules = [];
  constructor(private dataService: DataService) {
    // avant rien en param du constr et rien dans ngOnInit
    //this.matricules = listeMatricule;
   }

  boolBouton = false;

  ngOnInit(): void {
    this.matricules = this.dataService.rechercherParNom('michel');
  }

  clicBouton(){
    this.boolBouton = true;
  }
}
