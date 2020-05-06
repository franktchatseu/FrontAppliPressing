import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //le subject pour authentification 
  public LogIn=new BehaviorSubject<boolean>(this.tokenservice.isValid());
          authstatus=this.LogIn.asObservable()
  constructor(private tokenservice:TokenService) { 

  }

  //emition du subject
  emitAuthStatus(value){
    this.LogIn.next(value);
  }
}
