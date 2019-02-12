import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../article';

import { NewsDatabaseService } from '../news-database.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  id: string;
  type: string;

  article: Article = new Article();

  constructor(private route: ActivatedRoute, private newsDatabaseService: NewsDatabaseService) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    if (!this.id) {
      this.type = 'Create!';
    } else {
      this.type = 'Update!';
      this.getLocalArticle(this.id);
    }
  }

  HandleChanges() {
    if (!this.id) {
      this.newsDatabaseService.createArticle(this.article);
    } else {
      this.newsDatabaseService.updateArticle(this.id, this.article);
    }
  }

  getLocalArticle(id) {
    this.newsDatabaseService.getArticle(id)
      .subscribe(article => this.article = article);
  }

}
