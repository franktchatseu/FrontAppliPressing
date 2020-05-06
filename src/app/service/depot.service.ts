import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { Vetement } from '../model/vetement.model';
import { HttpClient } from '@angular/common/http';
import { FactureModel } from '../model/facture.model';
import { CategoriesModel } from '../model/categorie.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(
    private http:HttpClient,

    
  ) { }

  //on aurra besoin d'un liste de vetement qui sera precharge
  listvetement:Vetement[];
  listecategorie:CategoriesModel[];
  categoriesubjet=new Subject<CategoriesModel[]>();


  //le lien du serveur backend
  url:string="http://localhost:8080/";

  //fonction pour ajouter un depot: prend en parametre le client et la liste de ses vetements

  adddepot(facture:FactureModel,listvetement:Vetement[]){
    //const facturee:FactureModel=new FactureModel("","",true,200,200);
    this.http.post(this.url+"factures/"+facture.idClient,facture).subscribe(
      (data:FactureModel)=>{
        console.log(data)
        //on recupere  la facture ajoute
        const facture=data;
        //on introduit chaque vetement
         for(var i=0;i<listvetement.length;i++){
            const vetement=listvetement[i];
            vetement.idFac=facture.idFac;
            
            //on ajoute le vetement a cette facture

            this.addvetement(vetement);
          }
          
      },
      (error)=>{
        console.log(error);
     }
    )

  }

  //ajout d'une facture
  addfacture(facture:FactureModel){

    this.http.post(this.url+"factures/"+facture.idClient,facture).subscribe(
      (data)=>{
          console.log(data);
      },
      (error)=>{
        console.log(error);
     }
    )

  }

  //fonction ajout d'un vetement

  addvetement(vetement:Vetement){

    this.http.post(this.url+"vetements/"+vetement.idFac+"/"+vetement.categorie.idType,vetement).subscribe(
      (data)=>{
          console.log(data);
      },
      (error)=>{
        console.log(error);
     }
    )

  }


  //on aurra besoin de charger la liste des categories de la base de donee
  allcategorie(){

    this.http.get(this.url+"typeVetements").subscribe(
      (data:any)=>{
          
          this.listecategorie=data._embedded.typeVetements;
          this.emitcategorie();
      },
      (error)=>{
        console.log(error);
     }
    )
  }

//emition des categories
  emitcategorie(){
    this.categoriesubjet.next(this.listecategorie);
  }

}





