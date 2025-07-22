import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Dashboard } from './component/dashboard/dashboard';
import { Home } from './component/home/home';
import { AddProducts } from './component/add-products/add-products';
import { ViewProducts } from './component/view-products/view-products';
import { ManageProducts } from './component/manage-products/manage-products';
import { Userhome } from './component/userhome/userhome';
import { Userview } from './component/userview/userview';
import { Orders } from './component/orders/orders';
import { Userdashboard } from './component/userdashboard/userdashboard';
import { Viewdetails } from './component/viewdetails/viewdetails';
import { Usercart } from './component/usercart/usercart';

const routes: Routes = [
  {path:'',component:Login},
  {path:'admin',component:Dashboard,
    children:[
      {path:'home',component:Home},
      {path:'add',component:AddProducts},
      {path:'view',component:ViewProducts},
      {path:'manage',component:ManageProducts}
    ]
  },
  {path:'user',component:Userdashboard,
    children:[
      {path:'home',component:Userhome},
      {path:'view',component:Userview},
      {path:'cart',component:Usercart},
      {path:'orders',component:Orders},
      {path:'details/:id',component:Viewdetails}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
