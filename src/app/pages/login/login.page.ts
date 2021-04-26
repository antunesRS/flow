/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/semi */
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: String
  password: String
  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  doLogin(){
    this.service.doLogin(this.email, this.password).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }
}
