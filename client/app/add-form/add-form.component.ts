import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { identifierModuleUrl } from '@angular/compiler';
import { articleData } from '../../assets/models/articleData';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import {Article} from '../../assets/models/article';
import { AuthService } from '../../components/auth/auth.service';

export interface Category {
  value: string;
  viewValue: string;
}

const URL = '';

@Component({
  selector: 'app-add-form',
  template: require('./add-form.component.html'),
  styles: [require('./add-form.component.css')]
})
export class AddFormComponent implements OnInit {
  categories: Category[] = [
    { value: 'tech-0', viewValue: 'Tech' },
    { value: 'politics-1', viewValue: 'Politics' },
    { value: 'business-2', viewValue: 'Business' }
  ];
  articleData = new articleData;
  newArticle = '';
  uploader:FileUploader;
  currentUser;
  AuthService;

  @Output() sendArticleData = new EventEmitter<articleData>();

  bodyContent(event) {
    this.articleData.body = event.html;
    this.sendArticleData.emit(this.articleData);
  }

  onKey(event) {
    this.articleData.title = event.target.value;
    this.sendArticleData.emit(this.articleData);
  }

  categoryValue(event) {
    console.log(event.value);
    this.articleData.category = event.value;
    this.sendArticleData.emit(this.articleData);
  }

  onUploadStateChanged(files) {
    console.log(files);
    var reader = new FileReader();
    reader.readAsDataURL(files[0])  
    reader.onload = () => {
      let res = (reader.result as string);
      console.log(res);
      this.articleData.img = res;
      this.sendArticleData.emit(this.articleData)
    }
  }


  static parameters = [HttpClient, Router, AuthService];

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.http = http;
    this.router = router;
    this.AuthService = authService;
    this.AuthService.getCurrentUser(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, 
      formatDataFunctionIsAsync: true,
      formatDataFunction: async (item) => {
        return new Promise( (resolve, reject) => {
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });


  }

  onPublish(event) {
    // console.log(this.currentUser._id)
    this.articleData.author = this.currentUser._id;
    return this.http.post('/api/articles', this.articleData)
      .subscribe((article: Article) => {
        console.log('Added Article:', article._id);
        let id = article._id;
        console.log(this.currentUser._id);
        this.router.navigate(['/articles/', id])
      });
  }
  ngOnInit() {
  }

}
