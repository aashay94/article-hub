import { Component, OnInit } from '@angular/core';
import { AddFormComponent} from '../add-form/add-form.component';
import { articleData } from '../../assets/models/articleData'

@Component({
  selector: 'app-add-article',
  template: require('./add-article.component.html'),
  styles: [require('./add-article.component.css')]
})

export class AddArticleComponent implements OnInit {

  constructor() { }

  articleData: articleData;

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  receiveArticleData(articleData) {
    this.articleData = articleData;
  }

}
