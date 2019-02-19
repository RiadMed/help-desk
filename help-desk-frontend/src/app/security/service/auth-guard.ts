import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authenticationService.isTokenExpired()) {
            this.authenticationService.setLoggedIn(true);
            return true;
        }

        this.authenticationService.setLoggedIn(false);
        this.router.navigate(['/login']);
        return false;
    }
}