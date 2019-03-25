import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlansComponent } from './plans/plans.component';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: 'order', loadChildren: () => OrderModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
