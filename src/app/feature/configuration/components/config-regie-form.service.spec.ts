import { TestBed } from '@angular/core/testing';

import { ConfigRegieFormService } from './config-regie-form.service';

describe('ConfigRegieFormService', () => {
  let service: ConfigRegieFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigRegieFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
