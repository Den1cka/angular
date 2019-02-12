import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Article } from '../../article';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.css']
})
export class NewsSingleComponent implements OnInit {

  @Input() article: Article;
  @Input() source: { id: string, name: string };

  constructor() {
  }

  ngOnInit() {
  }

}
