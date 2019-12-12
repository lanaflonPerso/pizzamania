export class Pizza {
  nom: string;
  pate: string;
  base: string;
  miel: boolean;
  anchois: boolean;
  jambon: boolean;
  magret: boolean;
  image: string;

  constructor() {
    this.base = 'tomate';
    this.miel = false;
    this.anchois = false;
    this.jambon = false;
    this.magret = false;
  }

  public getPrix(): number {
    let prix = 0;

    if (this.base === 'creme') { prix += 4; } else
    if (this.base === 'tomate') { prix += 3; }

    if (this.miel) { prix += 3; }
    if (this.anchois) { prix += 1; }
    if (this.jambon) { prix += 2; }
    if (this.magret) { prix += 4; }

    return prix;
  }

  public pizzaValide(): boolean {
    return !this.anchois && !this.miel && !this.jambon && !this.magret;
  }
}
