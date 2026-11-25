import { TestBed } from '@angular/core/testing';

import { Hm } from './hm';

describe('Hm', () => {
  let service: Hm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
