import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8001/api/auth"


  login(data):Observable<any>{
    return this.http.post(this.url+"/login",data);
  }

  signup(data):Observable<any>{
    return this.http.post(this.url+"/signup",data);
  }
}
