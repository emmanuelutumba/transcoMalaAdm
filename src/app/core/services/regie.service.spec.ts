import { TestBed } from '@angular/core/testing';

import { RegieService } from './regie.service';

describe('RegieService', () => {
  let service: RegieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
