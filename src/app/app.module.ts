import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandeComponent } from './commande/commande.component';
import { FabriquePizzaComponent } from './fabrique-pizza/fabrique-pizza.component';
import { FavoritePizzaComponent } from './favorite-pizza/favorite-pizza.component';
import { CartePizzaComponent } from './carte-pizza/carte-pizza.component';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
