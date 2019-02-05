import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  id: string;
  action: string;

  header: string;

  button: string;
  isButton: boolean;

  isDisabled: boolean;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.action = this.route.snapshot.params.action;
  }

  ngOnInit() {
    switch (this.action) {
      case 'new':
        this.header = 'New Article';
        this.button = 'Create';
        this.isButton = true;
        this.isDisabled = false;
        break;
      case 'edit':
        this.header = `Edit Article. Id - ${this.id}.`;
        this.button = 'Update';
        this.isButton = true;
        this.isDisabled = false;
        break;
      case 'delete':
        this.header = `Delete Article. Id - ${this.id}.`;
        this.button = 'Delete';
        this.isButton = true;
        this.isDisabled = true;
        break;
      case 'details':
        this.header = `Article details. Id - ${this.id}.`;
        this.button = '';
        this.isButton = false;
        this.isDisabled = true;
        break;
    }
  }

  handleChanges() {
    console.log('Handle changes for the article.');
  }

}
