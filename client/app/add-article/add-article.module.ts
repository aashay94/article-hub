import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';


import { AddArticleComponent } from './add-article.component';
import { AddFormComponent } from '../add-form/add-form.component';
import { PreviewArticleComponent } from '../preview-article/preview-article.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthGuard } from '../../components/auth/auth-guard.service';
import { QuillModule } from 'ngx-quill';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularSplitModule } from 'angular-split';

export const ROUTES: Routes = [
    { path: 'addArticle', component: AddArticleComponent, canActivate: [AuthGuard] }
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
        MatCardModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        QuillModule,
        FileUploadModule,
        AngularSplitModule
    ],
    declarations: [
        AddArticleComponent,
        AddFormComponent,
        PreviewArticleComponent
    ],

    exports: [
        AddArticleComponent,
    ],
})
export class AddArticleModule {}
