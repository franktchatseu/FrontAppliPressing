import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClientItem } from '../client/client-list/client-list-datasource';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpclient:HttpClient) { }

  
  listeclient:Client[]


  clientsubject=new Subject<Client[]>()
  //les differentes methodes qui seront implementees

  add_client(client:Client){
    this.httpclient.post("http://localhost:8080/clients",client).subscribe(
      (data:Client)=>{
        this.listeclient.push(data)
         
         this.emitclient();
        
        
      }

    )
  }
  f
  update_client(client:Client){

    this.httpclient.put("http://localhost:8080/clients/"+client.idClient,client).subscribe(

      (data)=>{
        console.log("la modi")
        console.log(data)
      }
    )

  }
  delete_client(id:number){
     
      
      this.httpclient.delete("http://localhost:8080/clients/"+id).subscribe(
        (data)=>{
          //dans le cas ou tout ce passe bien
          //on supprime le client en local
          const index:number=this.listeclient.findIndex(
            (clientobjet)=>{
              return clientobjet.idClient===id;
             
            }
          )
          this.listeclient.splice(index,1)
          this.emitclient()
        }
      )
  }
  

  list_client(){


     this.httpclient.get('http://localhost:8080/clients').subscribe(

      (data:any)=>{
        this.listeclient=data._embedded.clients
         
         this.emitclient();
        
        
      }
     );
  
  }

  emitclient(){
    this.clientsubject.next(this.listeclient)
  }

}
