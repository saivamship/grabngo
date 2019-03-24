import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderLandingComponent } from './order-landing/order-landing.component';
import { OrderPlanComponent } from './order-plan/order-plan.component';
import { OrderCustomizeComponent } from './order-customize/order-customize.component';
import { OrderReviewComponent } from './order-review/order-review.component';

@NgModule({
  declarations: [OrderLandingComponent, OrderPlanComponent, OrderCustomizeComponent, OrderReviewComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
