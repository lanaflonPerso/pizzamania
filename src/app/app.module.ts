import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandeComponent } from './commande/commande.component';
import { FabriquePizzaComponent } from './fabrique-pizza/fabrique-pizza.component';
import { FavoritePizzaComponent } from './favorite-pizza/favorite-pizza.component';
import { CartePizzaComponent } from './carte-pizza/carte-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CommandeComponent,
    FabriquePizzaComponent,
    FavoritePizzaComponent,
    CartePizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
