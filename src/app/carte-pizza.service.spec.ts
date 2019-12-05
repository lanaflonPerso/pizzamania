import { TestBed } from '@angular/core/testing';

import { CartePizzaService } from './carte-pizza.service';

describe('CartePizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartePizzaService = TestBed.get(CartePizzaService);
    expect(service).toBeTruthy();
  });
});
