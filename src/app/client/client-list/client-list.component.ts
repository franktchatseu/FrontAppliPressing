import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { ClientService } from 'src/app/service/client.service';
import { Client } from 'src/app/model/client.model';
import { Router } from '@angular/router';
import { ClientEditComponent } from '../client-edit/client-edit.component';
import { MatDialog } from '@angular/material';
import { ClientAddComponent } from '../client-add/client-add.component';
import { ClientListDataSource, ClientItem } from './client-list-datasource';


export interface UserData {
  id_client: number;
  nom_client: string;
  tel_client: string;
  ville_client: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'ville', 'telephone','action'];
 // dataSource: MatTableDataSource<UserData>;
    dataSource:ClientListDataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ClientItem>;
   client:Client;
   list:Client[]=[
    {
      id_client:14,
      nom_client:"frank",
      ville_client:"bertoua",
      tel_client:"44sfs"
    },
    {
      id_client:14,
      nom_client:"frank",
      ville_client:"bertoua",
      tel_client:"44sfs"
    },
    {
      id_client:14,
      nom_client:"frank",
      ville_client:"bertoua",
      tel_client:"44sfs"
    }
  ];
  
  listclient:ClientItem[];
  constructor(private clientservice:ClientService,
              private route:Router,
              private dialog:MatDialog) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

   
    // Assign the data to the data source for the table to render
    this.clientservice.list_client().subscribe(
      (data)=>{
        this.listclient=data._embedded.clients
         this.client=data._embedded.clients[0];
        console.log(this.listclient)
        this.dataSource = new ClientListDataSource(this.listclient)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.table.dataSource = this.dataSource;
        
      }
    )
    
  }



  ngOnInit() {
   
    
  }

  //autres methodes 

  delete(id:number){

    this.clientservice.delete_client(3).subscribe(
      (data)=>{
        console.log(data)
      },
      (error)=>{
        console.log("echec:"+error)
      }
    );
    console.log(id)
  }

  //modication d'un client
  update(client:Client){
    
    this.dialog.open(ClientEditComponent);
  }

  //ajout d'un client
  add(){
    
    this.dialog.open(ClientAddComponent);
  }
  depot(client:Client){
    
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   // this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 
 
}




/** Builds and returns a new User. */

