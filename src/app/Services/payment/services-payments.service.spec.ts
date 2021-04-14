import { TestBed } from '@angular/core/testing';

import { ServicesPaymentsService } from './services-payments.service';

describe('ServicesPaymentsService', () => {
  let service: ServicesPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
