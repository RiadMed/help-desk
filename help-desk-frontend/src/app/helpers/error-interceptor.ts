import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../security/service/authentication.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/api';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService
        , private router: Router
        , private messageService: MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authenticationService.onLogOut();
                location.reload(true);
            }
            else if (err.status === 403) {
                localStorage.clear();
                this.authenticationService.setLoggedIn(false);
                if (this.router.url === '/login') {
                    this.authenticationService.onLogOut();
                } else {
                    this.router.navigate(['/403']);
                }

            }
            else if (err.status === 404 || err.status === 400) {
                this.authenticationService.setLoggedIn(false);
                this.messageService.add({ severity: 'error', summary: err.status, detail: err.message });
            }
            else if (err.status === 500) {
                this.authenticationService.setLoggedIn(false);
                this.router.navigate(['/500']);
            }
            const error = err.message || err.statusText;
            return throwError(error);
        }))
    }

}