import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    authService;

    static parameters = [AuthService, Router];
    constructor(authService: AuthService, private router: Router) {
        this.authService = authService;
        this.router = router;
    }

    canActivate() {
        let loggedIn = this.authService.isLoggedInSync();
        if(loggedIn){
            return true;
        } else {
            this.router.navigate(['/login']);    // redirect to login page for example
            return false;
        }
    }
}
