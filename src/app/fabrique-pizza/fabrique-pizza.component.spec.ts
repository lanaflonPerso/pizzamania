import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabriquePizzaComponent } from './fabrique-pizza.component';

describe('FabriquePizzaComponent', () => {
  let component: FabriquePizzaComponent;
  let fixture: ComponentFixture<FabriquePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabriquePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabriquePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
