import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePizzaComponent } from './favorite-pizza.component';

describe('FavoritePizzaComponent', () => {
  let component: FavoritePizzaComponent;
  let fixture: ComponentFixture<FavoritePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
