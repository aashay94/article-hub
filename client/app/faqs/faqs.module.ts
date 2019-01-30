import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';


import { FAQsComponent } from './faqs.component';


export const ROUTES: Routes = [
    { path: 'faqs', component: FAQsComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        
    ],
    declarations: [
        FAQsComponent
    ],

    exports: [
    ],
})
export class FAQsModule {}
