import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../article';
import { LocalArticle } from '../mock-news';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  id: string;
  type: string;

  article: Article = new Article();

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    if (!this.id) {
      this.type = 'Create!';
    } else {
      this.type = 'Update!';
      // Mock of logic for retrieving specific article from the local storage.
      this.article = LocalArticle;
    }
  }

  HandleChanges() {
    console.log('Handle changes for the article.');
  }

}
