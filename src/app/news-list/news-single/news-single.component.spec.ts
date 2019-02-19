import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NewsSingleComponent } from './news-single.component';
import { ApiArticle, Sources } from 'src/app/mock-news';

describe('NewsSingleComponent', () => {
  let component: NewsSingleComponent;
  let fixture: ComponentFixture<NewsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NewsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSingleComponent);
    component = fixture.componentInstance;

    component.article = ApiArticle;

    component.source = Sources[0];

    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should execute "ngOnInit"', () => {
    expect(component.ngOnInit).not.toThrow();
  });
});
