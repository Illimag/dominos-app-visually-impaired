import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderScreenComponent } from './order-screen/order-screen.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { OrderCrustsComponent } from './order-crusts/order-crusts.component';
import { OrderSizesComponent } from './order-sizes/order-sizes.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { 
    path:  '', 
    redirectTo:  'welcome', 
    pathMatch:  'full' 
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'order-screen',
    component: OrderScreenComponent
  },
  {
    path: 'order-menu',
    component: OrderMenuComponent
  },
  {
    path: 'order-crusts',
    component: OrderCrustsComponent
  },
  {
    path: 'order-sizes',
    component: OrderSizesComponent
  },
  {
    path: 'order-details',
    component: OrderDetailsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'your-orders',
    component: YourOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
