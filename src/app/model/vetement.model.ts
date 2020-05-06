import { CategoriesModel } from './categorie.model';

export class Vetement{


    public idVetement:number;
    public observation:string;
    public est_livrer:boolean;
    public quantite:number;
    public idFac:number;
    public categorie:CategoriesModel;

    constructor(observation:string,est_livrer:boolean,quantite:number){


        this.observation=observation;
        this.est_livrer=est_livrer;
        this.quantite=quantite;
    }
}