/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LessService } from './less.service';

describe('LessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessService]
    });
  });

  it('should ...', inject([LessService], (service: LessService) => {
    expect(service).toBeTruthy();
  }));
});
