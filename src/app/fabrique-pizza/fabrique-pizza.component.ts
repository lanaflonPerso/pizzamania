import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/models/Pizza';
import { PizzaBufferService } from "../pizza-buffer.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fabrique-pizza',
  templateUrl: './fabrique-pizza.component.html',
  styleUrls: ['./fabrique-pizza.component.css']
})

export class FabriquePizzaComponent implements OnInit {
  currentPizza: Pizza;

  constructor(private router: Router, private pizzaBufferService: PizzaBufferService) { }
  
  ngOnInit() {
    this.currentPizza = new Pizza();
    console.log("Créez la pizza que vous souahitez !");
  }

  public initCommande() {
    this.pizzaBufferService.setPizza(this.currentPizza);
    console.log("Votre pizza est enregistrée. On va sur le récapitualatif de la commande !");
    this.router.navigate(['commande']);
  }
}
