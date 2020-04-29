import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CollegueFormulaireComponent } from './collegue-formulaire/collegue-formulaire.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';


/*export const ROUTES: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'apropos', component: AProposComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: '', pathMatch: 'full', redirectTo: 'menu'}
];*/

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CollegueFormulaireComponent,
    MenuComponent,
    GalleryComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    /*RouterModule.forRoot(ROUTES)*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
