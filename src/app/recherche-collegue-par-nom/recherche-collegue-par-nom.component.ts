import { Component, OnInit } from '@angular/core';
import {listeMatricule} from '../mock/matricule.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor() {
   }

  boolBouton = false;

  ngOnInit(): void {
  }

  clicBouton(){
    this.boolBouton = true;
  }


 /* listerMatricule() {
    listeMatricule.forEach(element => {
      console.log(element);
    });
  }*/
}
