import { TestBed } from '@angular/core/testing';

import { ContribuableService } from './contribuable.service';

describe('ContribuableService', () => {
  let service: ContribuableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContribuableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
