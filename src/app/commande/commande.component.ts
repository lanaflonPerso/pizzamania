import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/models/Pizza';
import { PizzaBufferService } from '../pizza-buffer.service';
import { CommanderService } from '../commander.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  pizza: Pizza;
  isLoading: boolean;


  constructor(private pizzaBuffer: PizzaBufferService, private commandeAPI: CommanderService) { 
    this.isLoading = false;
  }

  ngOnInit() {
    this.pizza = this.pizzaBuffer.getPizza();
    console.log(this.pizza);
    this.commandeAPI.commanderPizza(this.pizza).subscribe((res) => {this.onSucces(res); }, (error) => {this.onError(error); });
  }

  private onSucces(succes: any) {
    console.log('SUCCESS');
    this.isLoading = false;
  }

  private onError(error: any) {
    console.log('error : ' + error);
  }
}
