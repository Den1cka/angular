import { Component, OnInit } from '@angular/core';

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
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {

  sampleSources: string[] = ['Source One', 'Source Two', 'Source with large text', 'Local Source'];

  sources: string[] = this.sampleSources;
  source = 'Select source!';
  isSource = false;

  apiArticles: IArticle[] = Array(10).fill(
    {
      author: 'Test Api Author',
      title: 'Test Api Title',
      description: 'Test Api Description. Test Api Description. Test Api Description.',
      url: 'https://www.ccn.com/bitcoin-price-trades-sideways-as-crypto-market-pines-for-more-volatility',
      urlToImage: 'https://cdn.ccn.com/wp-content/uploads/2018/08/bitcoin-price-stuck-gum.jpg',
      publishedAt: '2019-02-04T23:30:15Z',
      content: 'Test Api Content. Test Api Content. Test Api Content. Test Api Content. Test Api Content. Test  Api Content.'
    });
  localArticles: IArticle[] = Array(10).fill(
    {
      id: 'Test Id',
      author: 'Test Local Author',
      title: 'Test Local Title',
      description: 'Test Local Description. Test Local Description. Test Local Description.',
      content: 'Test Local Content. Test Local Content. Test Local Content. Test Local Content. Test Local Content. Test Local Content.'
    });

  articles: IArticle[];
  isArticles = false;

  isLocal = false;

  ChangeSource(source: string) {
    this.isSource = true;
    this.source = source;

    if (source === 'Local Source') {
      this.articles = this.localArticles;
    } else {
      this.articles = this.apiArticles;
    }
    this.isArticles = true;
  }

  ChangeMode() {
    this.isLocal = !this.isLocal;
    if (this.isLocal) {
      this.sources = ['Local Source'];
      this.source = 'Local Source';
      this.ChangeSource(this.source);
    } else {
      this.sources = this.sampleSources;
    }
  }

  hadleExpanding(event: boolean, article: IArticle) {
    console.log('Article has been expanded!');
  }

  constructor() { }

  ngOnInit() {
  }

}
