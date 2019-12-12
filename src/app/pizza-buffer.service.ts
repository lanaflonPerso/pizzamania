import { Injectable } from '@angular/core';
import { Pizza } from 'src/models/Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaBufferService {

  pizza: Pizza;
  constructor() { }

  public setPizza(pizza: Pizza) {
    this.pizza = pizza;
  }

  public getPizza() {
    return this.pizza;
  }
}
