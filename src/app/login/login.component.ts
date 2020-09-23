import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registration=false

  constructor() { }

  ngOnInit() {
  }
  changeOption(option){
    if(option=="registration"){
      this.registration=true;
    } else{
      this.registration=false;
    }
    
  }

}
