import { Component, OnInit } from '@angular/core';
import { CartePizzaService } from '../carte-pizza.service';
import { Pizza } from 'src/models/Pizza';
import { Route } from '@angular/compiler/src/core';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-carte-pizza',
  templateUrl: './carte-pizza.component.html',
  styleUrls: ['./carte-pizza.component.css']
})
export class CartePizzaComponent implements OnInit {

  data: Pizza[];
  isLoading: boolean;

  constructor(private carteAPI: CartePizzaService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.carteAPI.fetchCarte().subscribe((res) => {
      this.onSuccess(res);
    },
    (error) => {
      this.onError(error);
    });
  }

  private onSuccess(res: any) {
    this.data = res;
    this.isLoading = false;
  }

  private onError(error: any) {
    console.log('error : ' + error);
    this.isLoading = false;
  }

}
