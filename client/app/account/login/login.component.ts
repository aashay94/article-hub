// @flow
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../components/auth/auth.service';
import { OauthButtonsComponent } from '../../../components/oauth-buttons/oauth-buttons.component';

interface User {
    name: string;
    email: string;
    password: string;
}

@Component({
    selector: 'login',
    template: require('./login.html'),
    styles: [require('./login.css')],
})
export class LoginComponent {
    user: User = {
        name: '',
        email: '',
        password: '',
    };
    errors = {login: undefined};
    submitted = false;
    AuthService;
    Router;


    static parameters = [AuthService, Router];
    constructor(_AuthService_: AuthService, router: Router) {
        this.AuthService = _AuthService_;
        this.Router = router;

    }

    login(form) {
        if(form.invalid){
            //SHOW SNACKBAR
            return;
        } 

        return this.AuthService.login({
            email: this.user.email,
            password: this.user.password
        })
            .then(() => {
                // Logged in, redirect to home
                this.Router.navigateByUrl('/home');

            })
            .catch(err => {
                //show snackbar with message = err.json.message
                this.errors.login = err.json().message;
            });
    }
}
