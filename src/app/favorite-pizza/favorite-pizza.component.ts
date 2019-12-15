import { Component, OnInit, ɵɵload } from '@angular/core';
import { Pizza } from 'src/models/Pizza';
import { PizzaFavoriteService } from '../pizza-favorite.service';
import { CommanderService } from '../commander.service';
import { PizzaBufferService } from '../pizza-buffer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-pizza',
  templateUrl: './favorite-pizza.component.html',
  styleUrls: ['./favorite-pizza.component.css']
})
export class FavoritePizzaComponent implements OnInit {

private pizza: Pizza;

constructor(private pizzaFavorieService: PizzaFavoriteService, private commande: CommanderService, private pizzaBufferService : PizzaBufferService, private router : Router ) { }

  ngOnInit() {
    this.pizza = this.pizzaFavorieService.loadFavorite();
    
  }

  private commanderPizza() {
    this.pizzaBufferService.setPizza(this.pizza);
    this.router.navigate(['commande']);
  }

}
