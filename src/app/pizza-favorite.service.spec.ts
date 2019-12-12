import { TestBed } from '@angular/core/testing';

import { PizzaFavoriteService } from './pizza-favorite.service';

describe('PizzaFavoriteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaFavoriteService = TestBed.get(PizzaFavoriteService);
    expect(service).toBeTruthy();
  });
});
