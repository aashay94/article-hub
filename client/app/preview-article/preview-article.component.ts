import { Component, OnInit, Input } from '@angular/core';
import { articleData } from '../../assets/models/articleData'

@Component({
  selector: 'app-preview-article',
  template: require('./preview-article.component.html'),
  styles: [require('./preview-article.component.css')]
})
export class PreviewArticleComponent implements OnInit {

  @Input() data : articleData;

  constructor() { }

  ngOnInit() {
  }

}
