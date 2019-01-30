import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleViewComponent } from '../article-view/article-view.component';
import { AddArticleComponent } from '../add-article/add-article.component';
import {MatInputModule} from '@angular/material/input';
import { AddFormComponent } from '../add-form/add-form.component';
import { PreviewArticleComponent } from '../preview-article/preview-article.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';

export const ROUTES: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'tech', component: MainComponent },
    { path: 'politics', component: MainComponent },
    { path: 'business', component: MainComponent },
    { path: 'articles/:id', component: ArticleViewComponent},
    //{ path: 'addArticle', component: AddArticleComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule
    ],
    declarations: [
        MainComponent,
        ArticleListComponent,
        ArticleViewComponent,
    ],

    exports: [
        MainComponent,
    ],
})
export class MainModule {}
