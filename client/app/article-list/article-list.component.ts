import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import {Article} from '../../assets/models/article';
import { Router } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-article-list',
  templateUrl: './app/article-list/article-list.component.html',
  styleUrls: ['./app/article-list/article-list.component.css']
})
export class ArticleListComponent implements OnInit, AfterContentInit {
  static parameters = [Router];
  breakpoint: number;

@Input() articleList: Article[];


  constructor(private router: Router) { 
    this.router = router;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 767) ? 1 : (window.innerWidth <= 1024)? 2 : 3;
	}
	onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 767) ? 1 : (event.target.innerWidth <= 1024) ? 2 : 3;
  }

  ngAfterContentInit(){
    var pathname =  window.location.pathname
    if(pathname != '/home')
      window.scrollTo(0, 555);
    else
    window.scrollTo(0, 0);
  }

	onArticleClick(id){
    this.router.navigate(['/articles/',id])
	}
}
