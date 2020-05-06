import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  error;
  signupform:FormGroup
  constructor(private formbuilder:FormBuilder,
              private http:HttpClient,
              private userservice:UserService) { }

  ngOnInit() {
    this.initform()
  }


  initform(){
    this.signupform=this.formbuilder.group(

      {
        name:"",
        email:"",
        password:"",
        password_confirmation:""
      }
    )
  }

  signup(){

    const data={
      name:this.signupform.value["name"],
      email:this.signupform.value["email"],
      password:this.signupform.value["password"],
      password_confirmation:this.signupform.value["password_confirmation"]
    }
    this.userservice.signup(data).subscribe(
      (data)=>{
        console.log(data);

      },
      (error)=>{
        this.handleError(error)
      }
    )
  }

  handleError(error){
    this.error=error.error.message;
    
  }
  
}
