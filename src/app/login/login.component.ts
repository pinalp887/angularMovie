import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Login } from '../dto/User';
import { AuthenticationService } from '../service/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: Login = new Login();
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: [''],
      password: ['']
    })
    console.log(this.authenticationService.isUserLoggedIn())
  }

  login() {
    this.user = this.loginForm.value;
    this.authenticationService.login(this.user).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
        if (error instanceof HttpErrorResponse) {
          console.log(`error status is ${error.status}`);
          switch (error.status) {
            case 500:
              this.route.navigate(['internalError']);
            case 504:
              this.route.navigate(['internalError']);
          }
        }
      }
    )
  }
}
