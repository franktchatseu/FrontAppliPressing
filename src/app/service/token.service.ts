import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  authorize:boolean=false;
  constructor() { }


  //on manipule le token

  handleToken(token){
    //sauvegarde du token dans le local storage
    this.setToken(token);
    //console.log(this.decodePayload(this.payload(token)))
    console.log(this.isValid())
    this.authorize=this.isValid();

  }


  setToken(token){
    localStorage.setItem('token',token)
  }

  //recuperation du token dans le local storage
  getToken(){

    return localStorage.getItem('token');

  }

  //on retire le token dans le local storage

  removeToken(){
    localStorage.removeItem('token')
  }

  //methode pour voir si le token est encore valid

  isValid(){
    const token=this.getToken();
    //on verifie d'abord si le token existe
    if(token){
      //dans le cas on recupere le le payload qui est la charge utilise (deuxieme partie du token)
      const payload=this.decodePayload(this.payload(token));
      console.log(payload.iss)
      if(payload.iss==='http://localhost:8001/api/auth/login')
          return true
      
      return false;

    }
    return false;
  }


  payload(token){
    //deuxieme partie
    return token.split('.')[1];
  }

  //on decode le payload au format json

  decodePayload(payload){
    return JSON.parse(atob(payload))
  }
}
