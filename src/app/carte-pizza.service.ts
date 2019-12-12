import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/environments/API';

@Injectable({
  providedIn: 'root'
})

export class CartePizzaService {
  constructor(private httpClient: HttpClient) { }

  public fetchCarte() {
    return this.httpClient.get(API_URL + '/pizzas');
  }
}
