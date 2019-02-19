import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security/service/authentication.service';
import { AppUtils } from 'src/app/helpers/app-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-access',
  templateUrl: './not-access.component.html'
})
export class NotAccessComponent implements OnInit {

  private appUtils: AppUtils;

  constructor(private authenticationService: AuthenticationService
    , private router: Router) { }

  ngOnInit() {
  }

  public onLogOut() {
    this.authenticationService.onLogOut();
    this.router.navigate(['login']);
  }

}
