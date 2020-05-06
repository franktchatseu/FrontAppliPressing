import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { async } from 'q';
import { Vetement } from 'src/app/model/vetement.model';
import { DepotService } from 'src/app/service/depot.service';
import { Subscription } from 'rxjs';
import { CategoriesModel } from 'src/app/model/categorie.model';
import { FactureModel } from 'src/app/model/facture.model';
import { ClientListComponent } from 'src/app/client/client-list/client-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Client } from 'src/app/model/client.model';

@Component({
  selector: 'app-depot-add',
  templateUrl: './depot-add.component.html',
  styleUrls: ['./depot-add.component.scss']
})
export class DepotAddComponent implements OnInit,OnDestroy {

  //ma souscription

  subcription:Subscription;
  depotform:FormGroup;
  //creation du tableau local pour la liste des vetements
  listevetement:Vetement[];
  categorieSelected:CategoriesModel;
  categories:CategoriesModel[];

  observation = '';
  quantite:number;
  prix:number;
  montant_avance:number=0;;
  montant_total:number=0;
  date_retrait:Date;
  date_delivrance:Date;
  constructor(
      private formbuilder:FormBuilder,
      private depotservice:DepotService,
      private dialog:MatDialogRef<ClientListComponent>,@Inject(MAT_DIALOG_DATA) public client:Client
      
  ) { 

    this.allcategorie();
  }

  ngOnInit() {
   //intialisation du tableau des vetement
    this.listevetement=[];
  }


  //initialisation du formulaire pour le depot d'un  client

  //add to pannier

  addpannier(){
    
    console.log(this.date_retrait)
    console.log("observation: "+this.observation+ "quantite:"+this.quantite+ " prix: "+this.prix+" montant_avance: "+this.montant_avance)
    const vet:Vetement=new Vetement(this.observation,false,this.quantite);
    //on recupere finalement le nouveau prix entre
    //clone de la variable
    const categorie=new CategoriesModel(this.categorieSelected.nom_type,this.categorieSelected.prix);
          categorie.prix=this.prix;
          categorie.idType=this.categorieSelected.idType
    vet.categorie=categorie;

    //si on ajoute un vetement identique dans le tableau alors on augmente juste la quantite
  
    //recherche du vetement du tableau qui est egale au nouveau vetement à entrer
    const resulvet=this.listevetement.find(
      (vettable)=>{
          return vet.categorie.nom_type===vettable.categorie.nom_type && vet.categorie.prix===vettable.categorie.prix
          && vet.observation===vettable.observation; 
      }
    );

    // dans le cas le vetement n'existe pas deja dans le tableau
    if(resulvet==null){
      this.listevetement.push(vet);
    }
    // dans le cas contraire on augmente juste la quantite du vetement
    else{
      resulvet.quantite+=vet.quantite;
    }
    
    this.getmontanttotal()
    this.viderchamps();
  
  }

  //suppression d'un vetement du pannier

  deletepannier(id){
      this.listevetement.splice(id,1);
      this.getmontanttotal()
  }

  //recupereation de toute les categories

  allcategorie(){
    this.depotservice.allcategorie();
    this.subcription=this.depotservice.categoriesubjet.subscribe(

      (listcategorie)=>{
          this.categories=listcategorie;
          console.log(listcategorie)
      },
      (error)=>{
        console.log(error);
           }
    )

  }
  
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
  //changement du prix en fonction de la categorie selectionne
  getprix(categorie){
    this.prix=categorie.prix;
  }

  //on vide les champs
  viderchamps(){
    this.quantite=null;
    this.prix=null;
    this.observation=null;
    this.categorieSelected=null
  }


  //il d'agit ici de la methode pour valider le depot

  validerdepot(){
    //creation de la facture;
    this.date_delivrance=new Date();
    const facture:FactureModel=new FactureModel(this.date_delivrance,this.date_retrait,false,this.montant_avance,this.montant_total)
          //on passe le client a la facture
          facture.idClient=this.client.idClient;
         
    this.depotservice.adddepot(facture,this.listevetement);

    //fermeture de la boite de dialog
    this.dialog.close()
  }

  //calcul du montan total

  getmontanttotal(){
    var somme:number=0;
    for(var i=0;i<this.listevetement.length;i++){
      somme+=this.listevetement[i].quantite*this.listevetement[i].categorie.prix;
    }

    this.montant_total=somme;
    
  }

  //verification du depot
  champsvalid(){
    return this.listevetement!=[] && this.montant_avance && this.date_retrait;
  }

  
}
