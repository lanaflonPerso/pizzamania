import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from 'src/models/Pizza';

@Injectable({
  providedIn: 'root'
})
export class CommanderService {

  constructor(private http: HttpClient) {}
  commanderPizza(pizza: Pizza) {
    return this.http.post('http://localhost:8000/commande', pizza);
  }
}
