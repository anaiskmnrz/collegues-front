import { Component, OnInit, Input } from '@angular/core';
import Collegue from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  /* avant c'etait input avec rien dans constructor et ngOnInit
  @Input() col: Collegue;*/

  col: Collegue;
  messageErreur: string;
  modeModif = false;
  modeCrea = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.recupererCollegueCourant()
    .subscribe(collegue => this.col = collegue,
      err => this.messageErreur = 'erreur');
  }

  ajouterCollegue() {
    console.log('Création d\'un nouveau collègue');
    this.modeCrea = true;
    this.modeModif = false;
  }

  modifierCollegue() {
    console.log('Modification du collègue');
    this.modeModif = true;
    this.modeCrea = false;
  }

}
