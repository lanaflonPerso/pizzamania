import { TestBed } from '@angular/core/testing';

import { PizzaBufferService } from './pizza-buffer.service';

describe('PizzaBufferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaBufferService = TestBed.get(PizzaBufferService);
    expect(service).toBeTruthy();
  });
});
