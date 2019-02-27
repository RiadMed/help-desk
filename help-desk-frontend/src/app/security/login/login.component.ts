import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: AuthenticationService
    , private router: Router
    , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginService.setLoggedIn(false);
    this.loginForm = this.formBuilder.group({
      'username': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    });
  }

  public onLogin(user: NgForm) {
    this.loginService.onLogin(user);
  }

  public onLogOut() {
    this.loginService.onLogOut();
    this.router.navigate(['login']);
  }
}
