import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderLandingComponent } from './order-landing/order-landing.component';
import { OrderPlanComponent } from './order-plan/order-plan.component';
import { OrderCustomizeComponent } from './order-customize/order-customize.component';
import {StepsModule} from 'primeng/steps';
import { OrderReviewComponent } from './order-review/order-review.component';
import { OrderRoutingModule } from './order-routing.module';
// import {StepsModule} from 'primeng/steps';
@NgModule({
  declarations: [OrderLandingComponent, OrderPlanComponent, OrderCustomizeComponent, OrderReviewComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    StepsModule

  ]


})
export class OrderModule { }
