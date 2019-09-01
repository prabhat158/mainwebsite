import { TestBed } from '@angular/core/testing';

import { CompetitionDataService } from './competition-data.service';

describe('CompetitionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetitionDataService = TestBed.get(CompetitionDataService);
    expect(service).toBeTruthy();
  });
});
