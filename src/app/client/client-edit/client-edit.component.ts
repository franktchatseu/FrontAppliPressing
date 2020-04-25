import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/service/client.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  constructor(private frombuilder:FormBuilder,
              private clientservice:ClientService,
              private dialog:MatDialog) { }

  client:Client;
  clientform:FormGroup;
  ngOnInit() {

    this.initform();
  }

  //intialisation de notre formulaire

  initform(){
    
    this.clientform=this.frombuilder.group(

      {
        nom_client:["",[Validators.required]],

        ville_client:["",[Validators.required]],

        tel_client:["",[Validators.required]],
      }
    )

  }

  //la methode update

  update(){

      const nom=this.clientform.value['nom_client'];
      const ville=this.clientform.value['ville_client'];
      const telephone=this.clientform.value['tel_client'];

      //this.client.id_client=4;
      const client=new Client(nom,telephone,ville);

      console.log(client);
      this.clientservice.update_client(client).subscribe(

        (data)=>{
            this.dialog.closeAll();
        },
        (error)=>{
            console.log("erruer de modification:"+error)
        },
      )
  }
}
