import { TestBed } from '@angular/core/testing';

import { ServicesLoanService } from './services-loan.service';

describe('ServicesLoanService', () => {
  let service: ServicesLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
