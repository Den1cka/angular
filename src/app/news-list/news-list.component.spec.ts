import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { NewsListComponent } from './news-list.component';
import { NewsSingleComponent } from './news-single/news-single.component';
import { Observable, of } from 'rxjs';
import { Article } from '../article';
import { ApiArticles, LocalArticles, Sources } from '../mock-news';
import { NewsApiService } from '../news-api.service';
import { NewsDatabaseService } from '../news-database.service';

class MockNewsApiService {
  public getArticles(): Observable<Article[]> {
    console.log('here');
    return of(ApiArticles);
  }

  public getSources(): Observable<{ id: string, name: string }[]> {
    return of(Sources);
  }
}

class MockNewsDatabaseService {
  public getArticles(): Observable<Article[]> {
    return of(LocalArticles);
  }
}

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let newsApiService: NewsApiService;
  let newsDatabaseService: NewsDatabaseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [NewsListComponent, NewsSingleComponent],
      providers: [
        { provide: NewsApiService, useClass: MockNewsApiService },
        { provide: NewsDatabaseService, useClass: MockNewsDatabaseService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    newsApiService = TestBed.get(NewsApiService);
    newsDatabaseService = TestBed.get(NewsDatabaseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should execute "ChangeSource" for api', () => {
    component.ChangeSource({ id: 'api', name: 'Api Source' });
    expect(component.articles[0]._id).toBeNull();
  });

  it('Should execute "ChangeSource" for local', () => {
    component.ChangeSource(component.localSource);
    expect(component.articles[0]._id).not.toBeNull();
  });

  it('Should execute "ChangeMode" for local', () => {
    component.isLocal = true;
    component.ChangeMode();
    expect(component.source.id).toEqual('local');
  });

});
