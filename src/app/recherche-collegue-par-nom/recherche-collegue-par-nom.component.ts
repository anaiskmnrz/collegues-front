import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matricules = [];
  messageErreur: string;

  bool = false;
  constructor(private dataService: DataService) {
    // avant rien en param du constr et rien dans ngOnInit
    /*this.matricules = listeMatricule;*/
   }

   rechercherParNom(nom: string) {
    this.messageErreur = undefined;

    this.dataService.rechercherParNom(nom)
     .subscribe(
      listeMatricules => {
        this.matricules = listeMatricules;
        if (this.matricules.length === 0) {
          this.messageErreur = 'Aucun collègue avec ce nom';
        }
      },
      (err: HttpErrorResponse) => this.messageErreur = 'Erreur dans le protocole HTTP'
     );
     this.bool = true;
   }

   selectMatricule(matricule: string) {
    this.dataService.selectCollegueParMatricule(matricule)
    .subscribe(col => {},
      (err: HttpErrorResponse) => this.messageErreur = 'Erreur dans le protocole HTTP'
    );
   }

  ngOnInit(): void {
  }

}
