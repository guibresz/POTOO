import { TestBed } from '@angular/core/testing';

import { PotoosService } from './potoos.service';

describe('PotoosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotoosService = TestBed.get(PotoosService);
    expect(service).toBeTruthy();
  });
});
