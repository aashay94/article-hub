import {
    NgModule,
    ApplicationRef,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
    removeNgStyles,
    createNewHosts,
    createInputTransfer,
} from '@angularclass/hmr';

import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AddArticleModule } from './add-article/add-article.module';
import {ContactUsModule} from './contact-us/contact-us.module';
import {AboutUsModule} from './about-us/about-us.module';
import {FAQsModule} from './faqs/faqs.module';
import {TermsModule} from './terms/terms.module';
import { DirectivesModule } from '../components/directives.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { CookieService } from 'ngx-cookie-service';


export function tokenGetter() {
    return localStorage.getItem('id_token');
}

const appRoutes: Routes = [{ path: '',
    redirectTo: '/home',
    pathMatch: 'full'
}];

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter,
            }
        }),

        RouterModule.forRoot(appRoutes),
        MainModule,
        DirectivesModule,
        AccountModule,
        AdminModule,
        AddArticleModule,
        ContactUsModule,
        AboutUsModule,
        FAQsModule,
        TermsModule

    ],
    providers: [ 
        CookieService 
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    static parameters = [ApplicationRef];
    constructor(private appRef: ApplicationRef) {
        this.appRef = appRef;
    }

    hmrOnInit(store) {
        if (!store || !store.state) return;
        console.log('HMR store', store);
        console.log('store.state.data:', store.state.data);
        // inject AppStore here and update it
        // this.AppStore.update(store.state)
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        // change detection
        this.appRef.tick();
        Reflect.deleteProperty(store, 'state');
        Reflect.deleteProperty(store, 'restoreInputValues');
    }

    hmrOnDestroy(store) {
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()
        store.state = {data: 'yolo'};
        // store.state = Object.assign({}, appState)
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        // display new elements
        store.disposeOldHosts();
        Reflect.deleteProperty(store, 'disposeOldHosts');
        // anything you need done the component is removed
    }
}
