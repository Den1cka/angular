import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewsDatabaseService } from './news-database.service';

describe('NewsDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: NewsDatabaseService = TestBed.get(NewsDatabaseService);
    expect(service).toBeTruthy();
  });
});
