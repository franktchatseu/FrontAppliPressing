import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client.model';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ClientService } from 'src/app/service/client.service';
import { ClientListComponent } from '../client-list/client-list.component';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.scss']
})
export class ClientAddComponent implements OnInit {

  constructor(private frombuilder:FormBuilder,
    
    private clientservice:ClientService,
    private dialog:MatDialogRef<ClientListComponent>) { }

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

add(){

const nom=this.clientform.value['nom_client'];
const ville=this.clientform.value['ville_client'];
const telephone=this.clientform.value['tel_client'];

//this.client.id_client=4;
const client=new Client(nom,telephone,ville);

console.log(client);
  this.clientservice.add_client(client);
  this.dialog.close();
}

closedialog(){
  this.dialog.close();
}

}
