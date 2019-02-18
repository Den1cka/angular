import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: NewsApiService = TestBed.get(NewsApiService);
    expect(service).toBeTruthy();
  });
});
