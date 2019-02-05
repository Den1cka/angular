import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { ApiArticles, LocalArticles, Sources } from '../mock-news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {

  // Mock of logic for retrieving sources from the API.
  sources: string[] = Sources;
  source = 'Select source!';
  localSource = 'Local Source';
  isSource = false;

  articles: Article[];
  isArticles = false;

  filter: string;

  isLocal = false;

  ChangeSource(source: string) {
    this.isSource = true;
    this.source = source;

    if (source === this.localSource) {
      // Mock of logic for retrieving local articles.
      this.articles = LocalArticles;
    } else {
      // Mock of logic for retrieving articles related to the source from the API.
      this.articles = ApiArticles;
    }
    this.isArticles = true;
  }

  ApplyFilter() {
    // Mock of logic for retrieving articles according to the filter.
    console.log(`ApplyFilter! Filter - '${this.filter}'.`);
  }

  ChangeMode() {
    if (this.isLocal) {
      this.source = this.localSource;
      this.ChangeSource(this.source);
    }
  }

  LoadMore() {
    // Mock of logic for retrieving additional articles.
    console.log('LoadMore!');
  }

  constructor() { }

  ngOnInit() {
  }

}
