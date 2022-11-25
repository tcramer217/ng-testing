import { TestBed } from '@angular/core/testing';

import { AnotherService } from './another.service';

describe('AnotherService', () => {
  let service: AnotherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 1 and 1', () => {
    let result = service.someMethod(1,1);
    expect(result).toBe(2);
  })
});
