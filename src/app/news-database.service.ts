import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class NewsDatabaseService {

  private host = 'http://localhost:3000/news';

  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getArticles() {
    const url = this.host;
    return this.http.get<Array<Article>>(url);
  }

  public getArticle(id) {
    const url = `${this.host}/${id}`;
    return this.http.get<Article>(url);
  }

  public createArticle(article) {
    const url = this.host;
    this.http.post<string>(url, article).subscribe();
  }

  public updateArticle(id, article) {
    const url = `${this.host}/${id}`;
    this.http.put<string>(url, article, this.options).subscribe();
  }

  public deleteArticle(id) {
    const url = `${this.host}/${id}`;
    this.http.delete<string>(url).subscribe();
  }

}
