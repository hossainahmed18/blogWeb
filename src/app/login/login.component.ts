import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registration = false
  email: ''
  password = ""
  userName = ""
  userRole = "user"

  constructor(private loginServiceService: LoginServiceService, private _Activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }
  changeOption(option) {
    if (option == "registration") {
      this.registration = true;
    } else {
      this.registration = false;
    }

  }
  login() {
    this.loginServiceService.login({ email: this.email, password: this.password }).subscribe((data: any) => {

      console.log(data)
    })
  }
  register() {
    this.loginServiceService.login({ email: this.email, password: this.password, userName: this.userName, userRole: 'user' }).subscribe((data: any) => {
      this.registration = false;
    })
  }

}
