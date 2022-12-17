import { TestBed } from '@angular/core/testing';

import { LaptopbrandService } from './laptopbrand.service';

describe('LaptopbrandService', () => {
  let service: LaptopbrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopbrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
