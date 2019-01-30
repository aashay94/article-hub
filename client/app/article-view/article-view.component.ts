import { Component, OnInit, Input } from '@angular/core';
// import articleJSON from '../article-list/article-list.json';
import { MatCardModule } from '@angular/material';
import { Article } from '../../assets/models/article';
import { HttpClient } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-article-view',
  templateUrl: './app/article-view/article-view.component.html',
  styleUrls: ['./app/article-view/article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  article: Article;
  AuthService;
  currentUser = {};
  isLoggedIn;

  static parameters = [HttpClient];
  constructor(private http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    var pathname = window.location.pathname;

    return this.http.get('/api/articles/'+pathname.substr(pathname.lastIndexOf('/')+1))
    .subscribe((data: Article) => {
      console.log(data);
      this.article = data;
      window.scrollTo(0, 0);
    });
  }

  addComment(event){
    let commentText = event.value
    event.value = '';
    this.article.comments.push(commentText); 
    return this.http.put('/api/articles/'+this.article._id,{comments: this.article.comments})
    .subscribe();
  }

}
