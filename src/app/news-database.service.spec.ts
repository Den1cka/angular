import { TestBed } from '@angular/core/testing';

import { NewsDatabaseService } from './news-database.service';

describe('NewsDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsDatabaseService = TestBed.get(NewsDatabaseService);
    expect(service).toBeTruthy();
  });
});
