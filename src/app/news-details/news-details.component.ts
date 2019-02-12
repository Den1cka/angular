import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../article';
import { ApiArticle, LocalArticle } from '../mock-news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  id: string;

  source: string;
  localSource = 'Local Source';

  article: Article;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.source = this.route.snapshot.params.source;
  }

  ngOnInit() {
    // Mock of logic for retrieving specific article from the API or Local storage.
    if (this.source === this.localSource) {
      this.article = LocalArticle;
    } else {
      this.article = ApiArticle;
    }
  }

}
