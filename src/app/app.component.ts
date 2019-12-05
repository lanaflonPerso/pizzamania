import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Mania';
  constructor(private router: Router) {}

  public goToCommande() {
    this.router.navigate(['/commande']);
  }
}
