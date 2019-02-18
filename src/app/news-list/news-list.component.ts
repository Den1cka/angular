import { Component, OnInit } from '@angular/core';

import { Article } from '../article';

import { NewsApiService } from '../news-api.service';
import { NewsDatabaseService } from '../news-database.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {

  sources: { id: string, name: string }[];
  source = { id: 'select', name: 'Select source!' };
  localSource = { id: 'local', name: 'Local Source' };
  isSource = false;

  articles: Article[];
  isArticles = false;

  filter = '';

  isLocal = false;

  page = 1;

  ChangeSource(source: { id: string, name: string }) {
    this.isSource = true;
    this.source = source;

    if (this.source === this.localSource) {
      this.getLocalArticles();
    } else {
      this.articles = [];
      this.getApiArticles(this.source.id, this.page = 1, this.filter);
    }
    this.isArticles = true;
  }

  ApplyFilter() {
    this.articles = [];
    this.getApiArticles(this.source.id, this.page = 1, this.filter);
  }

  ChangeMode() {
    if (this.isLocal) {
      this.source = this.localSource;
      this.ChangeSource(this.source);
    }
  }

  LoadMore() {
    this.getApiArticles(this.source.id, this.page = this.page + 1, this.filter);
  }

  constructor(private newsApiService: NewsApiService, private newsDatabaseService: NewsDatabaseService) { }

  getSources() {
    this.newsApiService.getSources()
      .subscribe(sources => this.sources = sources);
  }

  getApiArticles(sourceId, page, filter) {
    this.newsApiService.getArticles(sourceId, page, filter)
      .subscribe(articles => this.articles = this.articles.concat(articles));
  }

  getLocalArticles() {
    this.newsDatabaseService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  ngOnInit() {
    this.getSources();
  }

}
