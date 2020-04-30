export class FactureModel {
  public idFac:number;
  public date_delivrance:string;
  public date_retrait:string
  public est_livrer:boolean;
  public montant_avance:number;
  public montant_total:number
  constructor(dateD:string,dateR:string,status:boolean,mtnAvan:number,mtnTotal:number){
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
