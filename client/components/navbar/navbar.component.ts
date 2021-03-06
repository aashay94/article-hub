import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { OauthButtonsComponent } from '../oauth-buttons/oauth-buttons.component';

@Component({
    selector: 'navbar',
    template: require('./navbar.html'),
    styles: [require('./navbar.css')],
})
export class NavbarComponent {
    isCollapsed = true;
    menu = [{
        title: 'Home',
        'link': '/home',
    },
    {
        title: 'Tech',
        'link': '/tech',

    },
    {
        title: 'Business',
        'link': '/business',

    },
    {
        title: 'Politics',
        'link': '/politics',

    },
    {
        title: 'AboutUs',
        'link': '/aboutus',

    },
    {
        title: 'ContactUs',
        'link': '/contactus',

    }];
    Router;
    isAdmin;
    isLoggedIn;
    currentUser = {};
    AuthService;

    static parameters = [AuthService, Router];
    constructor(private authService: AuthService, private router: Router) {
        this.AuthService = authService;

        this.Router = router;

        this.reset();

        this.AuthService.currentUserChanged.subscribe(user => {
            this.currentUser = user;
            this.reset();
        });
    }

    reset() {
        this.AuthService.isLoggedIn().then(is => {
            this.isLoggedIn = is;
        });
        this.AuthService.isAdmin().then(is => {
            this.isAdmin = is;
        });
        this.AuthService.getCurrentUser().then(user => {
            this.currentUser = user;
        });
    }

    logout() {
        return this.AuthService.logout().then(() => {
            this.Router.navigateByUrl('/home');
            this.reset();
        });
    }}
