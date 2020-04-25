import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }


  connection(){

    this.route.navigate(['/home']);
  }
}
