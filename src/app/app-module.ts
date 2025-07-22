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
import { Vieworders } from './component/vieworders/vieworders';
import { Orders } from './component/orders/orders';
import { Viewdetails } from './component/viewdetails/viewdetails';
import { Usercart } from './component/usercart/usercart';

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
    Vieworders,
    Orders,
    Viewdetails,
    Usercart
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
