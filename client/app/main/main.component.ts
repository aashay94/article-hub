import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { Router } from '@angular/router';
import {Article} from '../../assets/models/article';

@Component({
    selector: 'main',
    template: require('./main.html'),
    styles: [require('./main.css')],
})
export class MainComponent implements OnInit {

    awesomeArticles: Article[] = [];
    newArticle = '';

    static parameters = [HttpClient, Router];
    constructor(private http: HttpClient, private router: Router) {
        this.http = http;
        this.router = router;
    }

    ngOnInit() {
        var pathname =  window.location.pathname;
        //this.router.config.
        if(pathname != '/home') {
            return this.http.get('/api/articles/category?category='+pathname.substr(1))
            .subscribe((articles: Article[]) => {
                this.awesomeArticles = articles;
                console.log(this.awesomeArticles)
            });
        } else {
            return this.http.get('/api/articles')
            .subscribe((articles: Article[]) => {
                this.awesomeArticles = articles;
                console.log(this.awesomeArticles)
            });
        }
        
    }
}
