import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandeComponent } from './commande/commande.component';
import { FabriquePizzaComponent } from './fabrique-pizza/fabrique-pizza.component';
import { FavoritePizzaComponent } from './favorite-pizza/favorite-pizza.component';
import { CartePizzaComponent } from './carte-pizza/carte-pizza.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'fabrik', component: FabriquePizzaComponent },
  { path: 'favorite', component: FavoritePizzaComponent},
  { path: 'carte', component: CartePizzaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
