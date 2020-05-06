export class CategoriesModel {
  public idType:number;
  public nom_type:string;
  public prix:number;

  constructor(nom: string, montant:number ){
    this. nom_type=nom;
    this.prix=montant;
  }
}

