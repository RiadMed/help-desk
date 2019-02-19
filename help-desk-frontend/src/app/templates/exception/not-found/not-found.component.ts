import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/security/service/authentication.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router
    , private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  public goToHome() {
    this.authenticationService.setLoggedIn(false);
    this.router.navigate(['marques']);
  }

}
