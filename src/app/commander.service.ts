import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from 'src/models/Pizza';
import { PizzaFavoriteService } from './pizza-favorite.service';

@Injectable({
  providedIn: 'root'
})
export class CommanderService {

  constructor(private http: HttpClient, private pizzaFavorieService: PizzaFavoriteService) {}
  commanderPizza(pizza: Pizza) {
    this.pizzaFavorieService.saveFavorite(pizza);
    return this.http.put('http://localhost:8000/commanderPizza', pizza);
  }
}
