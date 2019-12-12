import { Injectable } from '@angular/core';
import { Pizza } from 'src/models/Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaFavoriteService {

  private PIZZA_KEY = 'FavoritePizza';

  constructor() { }

  public saveFavorite(pizza: Pizza) {
    console.log('Sauvegarde de la Pizza Favorite');
    window.localStorage.setItem(this.PIZZA_KEY, JSON.stringify(pizza));
  }


  public loadFavorite(): Pizza {
    const serializedPizza = window.localStorage.getItem(this.PIZZA_KEY);
    try{
      const pizzaObject = JSON.parse(serializedPizza);
      return Object.setPrototypeOf(pizzaObject, Pizza.prototype);
    } catch (e) {
      console.log(e);
      return null
    }

  }
}
