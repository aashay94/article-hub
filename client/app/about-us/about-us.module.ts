import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';


import { AboutUsComponent } from './about-us.component';


export const ROUTES: Routes = [
    { path: 'aboutus', component: AboutUsComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        
    ],
    declarations: [
        AboutUsComponent
    ],

    exports: [
    ],
})
export class AboutUsModule {}
