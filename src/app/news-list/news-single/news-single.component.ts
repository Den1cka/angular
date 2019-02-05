import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

interface IArticle {
  id: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.css']
})
export class NewsSingleComponent implements OnInit {

  @Input() article: IArticle;
  @Output() expanding: EventEmitter<boolean> = new EventEmitter();

  isExpanded = false;

  expand() {
    this.isExpanded = true;
    this.expanding.emit(true);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
