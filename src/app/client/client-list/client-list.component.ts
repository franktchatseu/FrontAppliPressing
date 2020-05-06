import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
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
import { Subscription } from 'rxjs';
import { DepotAddComponent } from 'src/app/depot/depot-add/depot-add.component';


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
export class ClientListComponent implements OnInit ,OnDestroy{
  displayedColumns: string[] = ['id','nom', 'ville', 'telephone','action'];
 // dataSource: MatTableDataSource<UserData>;
    dataSource:ClientListDataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Client>;
   client:Client;
   
  clientsubcription:Subscription
  listclient:Client[];
  constructor(private clientservice:ClientService,
              private route:Router,
              private dialog:MatDialog) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

   
    // Assign the data to the data source for the table to render
    
  
    
  }



  ngOnInit() {
    this.allclient()
    
  }
  ngOnDestroy() {
    this.clientsubcription.unsubscribe()
    
  }
  //autres methodes 

  delete(id:number){

    this.clientservice.delete_client(id);
    
  }

  //modication d'un client
  update(client:Client){
    
    this.dialog.open(ClientEditComponent, {
      width:'600px',
      data: client,
      disableClose: true
  });    
  }

  //ajout d'un client
  add(){
    
    this.dialog.open(ClientAddComponent,{
      width:'600px',
      disableClose: true
    });

  }
  depot(client:Client){
    this.dialog.open(DepotAddComponent,{
      width:'2000px',
      disableClose: true,
      data:client
    });
  }

  allclient(){
    this.clientservice.list_client()
    this.clientsubcription=this.clientservice.clientsubject.subscribe(
        (data:Client[])=>{
        console.log('voici mes client')
        console.log(data)
        this.listclient=data
       
        this.dataSource = new ClientListDataSource(this.listclient)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.table.dataSource = this.dataSource;
    }
)

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

