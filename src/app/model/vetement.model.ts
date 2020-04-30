export class Vetement{


    public idVetement:number;
    public observation:string;
    public est_livrer:boolean;
    public quantite:number

    constructor(observation:string,est_livrer:boolean,quantite:number){


        this.observation=observation;
        this.est_livrer=est_livrer;
        this.quantite=quantite;
    }
}