import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/models/Pizza';

@Component({
  selector: 'app-fabrique-pizza',
  templateUrl: './fabrique-pizza.component.html',
  styleUrls: ['./fabrique-pizza.component.css']
})

export class FabriquePizzaComponent implements OnInit {
  currentPizza: Pizza;

  ngOnInit() {
  }
}
