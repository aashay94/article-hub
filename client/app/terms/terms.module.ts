import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';


import { TermsComponent } from './terms.component';


export const ROUTES: Routes = [
    { path: 'terms', component: TermsComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        
    ],
    declarations: [
        TermsComponent
    ],

    exports: [
    ],
})
export class TermsModule {}
