import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './component/login/login';
import { Dashboard } from './component/dashboard/dashboard';
import { AddProducts } from './component/add-products/add-products';
import { ViewProducts } from './component/view-products/view-products';
import { ManageProducts } from './component/manage-products/manage-products';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Home } from './component/home/home';
import { Userdashboard } from './component/userdashboard/userdashboard';
import { Userview } from './component/userview/userview';
import { Userhome } from './component/userhome/userhome';
import { Cart } from './component/cart/cart';
import { Vieworders } from './component/vieworders/vieworders';
import { Orders } from './component/orders/orders';

@NgModule({
  declarations: [
    App,
    Login,
    Dashboard,
    AddProducts,
    ViewProducts,
    ManageProducts,
    Home,
    Userdashboard,
    Userview,
    Userhome,
    Cart,
    Vieworders,
    Orders
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
