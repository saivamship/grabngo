import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCustomizeComponent } from './order-customize.component';

describe('OrderCustomizeComponent', () => {
  let component: OrderCustomizeComponent;
  let fixture: ComponentFixture<OrderCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
