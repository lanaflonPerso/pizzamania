import { Injectable } from '@angular/core';
import { Pizza } from 'src/models/Pizza';
import { PizzaBufferService } from './pizza-buffer.service';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  private HISTORY_KEY = 'Historique';
  private historique : Array<Pizza>;
  constructor() { 
     this.historique = new Array<Pizza>()
  }

  public saveHistorique() {
    console.log('Sauvegarde de l\'historique star wars');
    window.localStorage.setItem(this.HISTORY_KEY, JSON.stringify(this.historique));
  }


  public loadHistorique(): Array<Pizza> {
    const serializedHistorique = window.localStorage.getItem(this.HISTORY_KEY);
    try{
      this.historique = JSON.parse(serializedHistorique);
      return  this.historique;
    } catch (e) {
      window.localStorage.setItem(this.HISTORY_KEY , JSON.stringify(this.historique));
      console.log("Historique n'existait pas je léou créou");
      return this.historique;
    }
  }
  
  public appendPizza(p: Pizza) : void {
    this.historique.push(p);
  }
}
