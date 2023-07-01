import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  // propoty
  message:string = "Hell Angular"

  // object
  profile = {
    "name":"xxx",
    "tel":"0898989",
    "gender":"Male"
  }
  // 2 way data binding
  userData = {
    "email":"",
    "password":""
  }
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  submitLogin()
  {
    //alert("Hey angular");
    if(this.userData.email == "admin@email.com" && this.userData.password == "1234")
    {
      alert("Login Success");
      this.router.navigate(['backend']);
    }
    else
    {
      alert("Login fail!!!");
    }
  }
}
