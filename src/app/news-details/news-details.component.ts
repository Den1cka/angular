import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../article';

import { NewsApiService } from '../news-api.service';
import { NewsDatabaseService } from '../news-database.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  id: string;

  source: string;
  localSource = 'local';

  article: Article;

  constructor(private route: ActivatedRoute, private newsApiService: NewsApiService, private newsDatabaseService: NewsDatabaseService) {
    this.id = this.route.snapshot.params.id;
    this.source = this.route.snapshot.params.source;
  }

  ngOnInit() {
    if (this.source === this.localSource) {
      this.getLocalArticle(this.id);
    } else {
      this.getApiArticle(this.source, this.id);
    }
  }

  getApiArticle(sourceId, publishedAt) {
    this.newsApiService.getArticle(sourceId, publishedAt)
      .subscribe(article => this.article = article);
  }

  getLocalArticle(id) {
    this.newsDatabaseService.getArticle(id)
      .subscribe(article => this.article = article);
  }

}
