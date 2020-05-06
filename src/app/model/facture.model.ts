import { Client } from './client.model';

export class FactureModel {
  public idFac:number;
  public date_delivrance:Date;
  public date_retrait:Date;
  public est_livrer:boolean;
  public montant_avance:number;
  public montant_total:number;
  public idClient;

  constructor(dateD:Date,dateR:Date,status:boolean,mtnAvan:number,mtnTotal:number){
    this.date_delivrance=dateD;
    this.date_retrait=dateR;
    this.est_livrer=status;
    this.montant_avance=mtnAvan;
    this.montant_total=mtnTotal;
  }


}

export interface FactureRes {
   date_delivrance: string;
   date_retrait: string
   est_livrer: boolean;
   montant_avance: number;
   montant_total: number
}
