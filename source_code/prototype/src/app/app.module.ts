import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OrderScreenComponent } from './order-screen/order-screen.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { OrderCrustsComponent } from './order-crusts/order-crusts.component';
import { OrderSizesComponent } from './order-sizes/order-sizes.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeliveryComponent,
    OrderScreenComponent,
    OrderMenuComponent,
    OrderCrustsComponent,
    OrderSizesComponent,
    OrderDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
