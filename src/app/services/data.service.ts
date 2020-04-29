import { Injectable } from '@angular/core';
import Collegue from '../models/Collegue';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueSelectionne = new Subject<Collegue>();

  modif = false;

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    /*return listeMatricule;*/

    return this.http.get<string[]>(`${environment.backendUrl}collegues?nom=${nom}`);
  }

  recupererCollegueCourant(): Observable<Collegue>{
   /* return collegueMock;*/

   return this.subCollegueSelectionne.asObservable();
  }

  selectCollegueParMatricule(matricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`${environment.backendUrl}collegues/${matricule}`)
      .pipe(tap(collegue => this.subCollegueSelectionne.next(collegue)));
  }

  /*selectCollegueParMatricule(matricule: string): Observable<Collegue> {
    const obsCollegue =  this.http.get<Collegue>(`${environment.backendUrl}collegues/${matricule}`);
    obsCollegue.subscribe(collegue => this.subCollegueSelectionne.next(collegue));
    return obsCollegue;
  }*/

  creerCollegue(nom: string, prenoms: string, email: string, dateDeNaissance: Date, photoUrl: string): Observable<Collegue>{
    this.modif = true;
    return this.http.post<Collegue>(`${environment.backendUrl}collegues`,
    {
      nom: `${nom}`,
      prenoms: `${prenoms}`,
      email: `${email}`,
      dateDeNaissance: `${dateDeNaissance}`,
      photoUrl: `${photoUrl}`
    });
  }
}
