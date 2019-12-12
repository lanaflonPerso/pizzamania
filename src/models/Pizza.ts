export class Pizza {
  nom: string;
  pate: string;
  base: string;
  miel: boolean;
  anchois: boolean;
  jambon: boolean;
  magret: boolean;
  image: string;
  prix: number;

  constructor() {
    this.prix = 0;
  }

  public getPrix(): number {
    this.updatePrice();
    return this.prix;
  }

  public updatePrice(): void {
    let prix = 0;

    if (this.pate === 'creme') { prix += 4; } else
    if (this.pate === 'tomate') { prix += 3; }

    if (this.miel) { prix += 3; }
    if (this.anchois) { prix += 1; }
    if (this.jambon) { prix += 2; }
    if (this.magret) { prix += 4; }

    this.prix = prix;
  }
}
