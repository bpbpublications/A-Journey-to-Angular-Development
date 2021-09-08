import { TestBed } from '@angular/core/testing';

import { MyTestService } from './my-test.service';

describe('MyTestService', () => {
  let service: MyTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
