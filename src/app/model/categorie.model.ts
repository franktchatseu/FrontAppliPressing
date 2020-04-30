export class CategoriesModel {
  public id_type:number;
  public nom_type:string;
  public prix:number;

  constructor(nom: string, montant:number ){
    this. nom_type=nom;
    this.prix=montant;
  }
}

export interface CategoriesRes {
   id_type: number;
   nom_type: string;
   prix: number;

}
