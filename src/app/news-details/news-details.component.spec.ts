import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsDetailsComponent } from './news-details.component';
import { Article } from '../article';
import { Observable, of } from 'rxjs';
import { ApiArticles, Sources, LocalArticles, ApiArticle, LocalArticle } from '../mock-news';
import { NewsApiService } from '../news-api.service';
import { NewsDatabaseService } from '../news-database.service';

class MockNewsApiService {
  public getArticle(): Observable<Article> {
    return of(ApiArticle);
  }
}

class MockNewsDatabaseService {
  public getArticle(): Observable<Article> {
    return of(LocalArticle);
  }
}

describe('NewsDetailsComponent', () => {
  let component: NewsDetailsComponent;
  let fixture: ComponentFixture<NewsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NewsDetailsComponent],
       providers: [
        { provide: NewsApiService, useClass: MockNewsApiService },
        { provide: NewsDatabaseService, useClass: MockNewsDatabaseService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should execute "ngOnInit" for api', () => {
    component.source = 'local';
    component.ngOnInit();
    expect(component.article._id).toEqual('Test');
  });

  it('Should execute "ngOnInit" for local', () => {
    component.source = 'api';
    component.ngOnInit();
    expect(component.article._id).toBeNull();
  });
});
