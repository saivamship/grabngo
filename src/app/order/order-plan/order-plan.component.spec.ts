import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlanComponent } from './order-plan.component';

describe('OrderPlanComponent', () => {
  let component: OrderPlanComponent;
  let fixture: ComponentFixture<OrderPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
