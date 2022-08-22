import { TestBed } from '@angular/core/testing';

import { RegulateurService } from './regulateur.service';

describe('RegulateurService', () => {
  let service: RegulateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegulateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
