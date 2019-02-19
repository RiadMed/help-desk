import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error) {
    const router = this.injector.get(Router);
    if (error.rejection.status === 401 || error.rejection.status === 403) {
      router.navigate(['/login']);
    }
    
    throw error;
  }
}