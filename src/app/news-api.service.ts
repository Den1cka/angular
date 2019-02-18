import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private host = 'https://newsapi.org/v2';
  private apiKey = '774e60a37bd041c182c26a37eead0edf';

  private options = {
    headers: new HttpHeaders({ 'x-api-key': this.apiKey })
  };

  constructor(private http: HttpClient) { }

  public getSources() {
    const url = `${this.host}/sources`;
    return this.http.get<{ sources: Array<{ id: string, name: string }> }>(url, this.options)
      .pipe(map(x => x.sources.map(y => ({ id: y.id, name: y.name }))));
  }

  public getArticles(sourceId, page, filter) {
    const url = `${this.host}/everything?sources=${sourceId}&page=${page}&q=${filter}`;
    return this.http.get<{ articles: Array<Article> }>(url, this.options)
      .pipe(map(x => x.articles));
  }

  public getArticle(sourceId, publishedAt) {
    const url = `${this.host}/everything?sources=${sourceId}&from=${publishedAt}&to=${publishedAt}`;
    return this.http.get<{ articles: Array<Article> }>(url, this.options)
      .pipe(map(x => x.articles[0]));
  }
}
