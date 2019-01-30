import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';


import { ContactUsComponent } from './contact-us.component';


export const ROUTES: Routes = [
    { path: 'contactus', component: ContactUsComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        
    ],
    declarations: [
        ContactUsComponent
    ],

    exports: [
    ],
})
export class ContactUsModule {}
