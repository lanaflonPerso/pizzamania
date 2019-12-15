import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/models/Pizza';
import { PizzaBufferService } from '../pizza-buffer.service';
import { CommanderService } from '../commander.service';
import { Router } from '@angular/router';
import { HistoriqueService } from '../historique.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  pizza: Pizza;
  isLoading: boolean;


  constructor(private pizzaBuffer: PizzaBufferService, private commandeAPI: CommanderService, private historique : HistoriqueService , private router : Router) { 
    this.isLoading = false;
  }

  ngOnInit() {
    this.pizza = this.pizzaBuffer.getPizza();
    if(this.pizza) {
      console.log(this.pizza);
      this.commandeAPI.commanderPizza(this.pizza).subscribe((res) => {this.onSucces(res); }, (error) => {this.onError(error); });
    }else{
      console.log("Pizza inexistant dans le buffer");
      this.router.navigate(['']);
    }
  }

  private onSucces(succes: any) {
    this.historique.loadHistorique();
    console.log('SUCCESS');
    const time = new Date();
    this.pizza['timestamp'] = time;
    console.log('pizza commander le : ' + time.toISOString());
    this.historique.appendPizza(this.pizza);
    this.historique.saveHistorique();
    this.isLoading = false;
  }

  private onError(error: any) {
    console.log('error : ' + error);
  }

  
}
