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

  public getPrix(): number {
    return this.prix;
  }
}
