import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpclient:HttpClient) { }

  


  //les differentes methodes qui seront implementees

  add_client(client:Client):Observable<any>{
    return this.httpclient.post("http://localhost:8080/clients",client)
  }
  
  update_client(Client:Client):Observable<any>{

    return this.httpclient.put("http://localhost:8080/clients/"+1,Client)

  }
  delete_client(id:number):Observable<any>{

      return this.httpclient.delete("http://localhost:8080/clients/"+id);
  }
  

  list_client():Observable<any>{


     return this.httpclient.get('http://localhost:8080/clients');
  
  }

}
