import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderCustomizeComponent } from './order-customize/order-customize.component';
import { OrderLandingComponent } from './order-landing/order-landing.component';
import { OrderPlanComponent } from './order-plan/order-plan.component';
import { OrderReviewComponent } from './order-review/order-review.component';

const routes: Routes = [
    {
        path: 'customize', component: OrderCustomizeComponent,
    },
    {
        path: 'plan', component: OrderPlanComponent,
    },
    {
        path: 'review', component: OrderReviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
