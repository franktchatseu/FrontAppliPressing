import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/service/client.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ClientListComponent } from '../client-list/client-list.component';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  constructor(private frombuilder:FormBuilder,
              private clientservice:ClientService,
              private dialog:MatDialogRef<ClientListComponent>,@Inject(MAT_DIALOG_DATA) public client:Client) { }

  
  //le client a mettre a jour a ete injecte dans le constructeur
  clientform:FormGroup;
  ngOnInit() {
    
    this.initform();
  }

  //intialisation de notre formulaire

  initform(){
    
    this.clientform=this.frombuilder.group(

      {
        nom_client:[this.client.nom_client,[Validators.required]],

        ville_client:[this.client.ville_client,[Validators.required]],

        tel_client:[this.client.tel_client,[Validators.required]],
      }
    )

  }

  //la methode update

  update(){
     
      const nom=this.clientform.value['nom_client'];
      const ville=this.clientform.value['ville_client'];
      const telephone=this.clientform.value['tel_client'];

      //on met a jour les autres champs du client
      this.client.nom_client=nom;
      this.client.tel_client=telephone;
      this.client.ville_client=ville

      
      this.clientservice.update_client(this.client)
      
      this.dialog.close();
  }
}
