import { Component, OnInit, ɵɵload } from '@angular/core';
import { Pizza } from 'src/models/Pizza';
import { PizzaFavoriteService } from '../pizza-favorite.service';
import { CommanderService } from '../commander.service';

@Component({
  selector: 'app-favorite-pizza',
  templateUrl: './favorite-pizza.component.html',
  styleUrls: ['./favorite-pizza.component.css']
})
export class FavoritePizzaComponent implements OnInit {

private pizza: Pizza;

constructor(private pizzaFavorieService: PizzaFavoriteService, private commande: CommanderService ) { }
s
  ngOnInit() {
  }

}
