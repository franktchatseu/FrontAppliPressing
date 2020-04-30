import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
   body;
  ngOnInit() {
    this.body = <HTMLDivElement> document.body;
    this.loadScript()
    this.loadScript1()
    this.loadScript2()
    this.loadScript3()
  }


  public loadScript() {
    
    let script = document.createElement('script');
    script.innerHTML = 'jn,n,n,n';
    script.src = '../../assets/web/js/SidebarNav.min.js';
    script.async = true;
    script.defer = true;
    this.body.appendChild(script);
    
}
 
public loadScript1() {
 
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../assets/web/js/jss.js';
  script.async = true;
  script.defer = true;
  this.body.appendChild(script);
 
} 
public loadScript2() {
  
  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../assets/web/js/classie.js';
  script.async = true;
  script.defer = true;
  
  this.body.appendChild(script);
  
  
} 
public loadScript3() {

  let script = document.createElement('script');
  script.innerHTML = '';
  script.src = '../../assets/web/js/jss2.js';
  script.async = true;
  script.defer = true;
  this.body.appendChild(script);
  
}



}
