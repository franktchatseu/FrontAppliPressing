
export class Client{

    public idClient:number;
    public nom_client:string;
    public tel_client:string;
    public ville_client:string;
    
    constructor(nom:string,tel:string,ville:string){

        //affectation des valeurs
        this.nom_client=nom;
        this.tel_client=tel;
        this.ville_client=ville

    }
}
