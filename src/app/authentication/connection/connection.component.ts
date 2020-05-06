import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  error;
  loginform:FormGroup;
  constructor(private route:Router,
              private formbuilder:FormBuilder,
              private http:HttpClient,
              private userservice:UserService,
              private tokenservice:TokenService
              ) { }

  ngOnInit() {
    this.initform();
  }

  

  //initialisation du formulaire
  initform(){
      this.loginform=this.formbuilder.group(
        {
          email:"",
          password:""
        }
      )

  }
  connection(){

    this.route.navigate(['/home']);
  }

  login(){
    const email=this.loginform.value["email"];
    const password=this.loginform.value["password"];
    const data={
      email:email,
      password:password
    }
    
    this.userservice.login(data).subscribe(

      (data)=>{
        this.handleReponse(data)
      },
      (error)=>{
       this.handleError(error);
       console.log(this.error)
        
      }
    )
  } 
//on manipule l'erreur
  handleError(error){
    this.error=error.error.error;
    
  }

  //on manipule la reponse
  handleReponse(data){
    this.tokenservice.handleToken(data.access_token);

    if(this.tokenservice.authorize){
      this.route.navigate(["/client"])
    }
  }
}
