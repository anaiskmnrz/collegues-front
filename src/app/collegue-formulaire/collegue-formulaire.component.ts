import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import Collegue from '../models/Collegue';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collegue-formulaire',
  templateUrl: './collegue-formulaire.component.html',
  styleUrls: ['./collegue-formulaire.component.css']
})
export class CollegueFormulaireComponent implements OnInit {

  saisieCollegue: Collegue = new Collegue('', '', '', '', null, '');
  messageErreur: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  creerCollegue(){
    this.dataService.creerCollegue(this.saisieCollegue.nom, this.saisieCollegue.prenoms, this.saisieCollegue.email,
      this.saisieCollegue.dateDeNaissance, this.saisieCollegue.photoUrl)
    .subscribe(col => this.saisieCollegue = col,
      (err: HttpErrorResponse) => this.messageErreur = 'Erreur dans le protocole HTTP');
  }

}
