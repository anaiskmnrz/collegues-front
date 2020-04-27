import { Component, OnInit, Input } from '@angular/core';
import Collegue from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  // avant c'etait input avec rien dans constructor et ngOnInit
  //@Input() col: Collegue;

  col: Collegue;

  bool = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.col = this.dataService.recupererCollegueCourant();
  }

  ajouterCollegue() {
    console.log('Création d\'un nouveau collègue');
  }

  modifierCollegue() {
    console.log('Modification du collègue');
    this.bool = true;
  }

}
