import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { ApplicationService } from 'src/app/buisness/services/application.service';
import { AppSettings } from 'src/app/buisness/models/app-settings';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {

  appSettings: AppSettings;
  loginForm: FormGroup;
  logoUrl: string;
  hasImage: boolean;

  constructor(private loginService: AuthenticationService
    , private applicationService: ApplicationService
    , private router: Router
    , private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.applicationService.refreshData.subscribe(() => {
      this.getAppsSettings();
    })
    this.getAppsSettings();
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

  private getAppsSettings() {
    this.applicationService.findOne(1).subscribe(data => {
      this.appSettings = data;
      this.hasImage = this.appSettings.loginImg!== null;
      this.logoUrl = "data:image/png;base64," + this.appSettings.loginImg;
    });
  }
}
