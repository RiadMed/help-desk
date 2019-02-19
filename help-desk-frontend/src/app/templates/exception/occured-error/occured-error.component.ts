import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/security/service/authentication.service';

@Component({
  selector: 'app-occured-error',
  templateUrl: './occured-error.component.html'
})
export class OccuredErrorComponent implements OnInit {

  constructor(private router: Router
    , private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public goToHome() {
    this.authenticationService.setLoggedIn(false);
    this.router.navigate(['marques']);
  }


}
