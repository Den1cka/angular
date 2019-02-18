import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { Article } from '../article';
import { Observable, of } from 'rxjs';
import { ApiArticles, Sources, LocalArticles, ApiArticle, LocalArticle } from '../mock-news';
import { NewsDatabaseService } from '../news-database.service';

import { NewsEditComponent } from './news-edit.component';

class MockNewsDatabaseService {
  public getArticle(): Observable<Article> {
    return of(LocalArticle);
  }

  public createArticle() {
    return null;
  }

  public updateArticle() {
    return null;
  }
}

describe('NewsEditComponent', () => {
  let component: NewsEditComponent;
  let fixture: ComponentFixture<NewsEditComponent>;
  let newsDatabaseService: NewsDatabaseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [NewsEditComponent],
      providers: [
        { provide: NewsDatabaseService, useClass: MockNewsDatabaseService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEditComponent);
    component = fixture.componentInstance;
    newsDatabaseService = TestBed.get(NewsDatabaseService);
    spyOn(newsDatabaseService, 'createArticle').and.callThrough();
    spyOn(newsDatabaseService, 'updateArticle').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should execute "ngOnInit" for update', () => {
    component.id = 'Test';
    component.ngOnInit();
    expect(component.article._id).toEqual(component.id);
  });

  it('Should execute "HandleChanges" for create', () => {
    component.id = null;
    component.HandleChanges();
    expect(newsDatabaseService.createArticle).toHaveBeenCalled();
  });

  it('Should execute "HandleChanges" for update', () => {
    component.id = 'Test';
    component.HandleChanges();
    expect(newsDatabaseService.updateArticle).toHaveBeenCalled();
  });
});
