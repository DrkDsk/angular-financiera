import { TestBed } from '@angular/core/testing';

import { ListarDataService } from './listar-data.service';

describe('ListarDataService', () => {
  let service: ListarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
