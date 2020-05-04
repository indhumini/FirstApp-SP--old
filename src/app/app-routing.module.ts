import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomproductComponent } from './components/customproduct/customproduct.component';
import { DeliveryComponent } from './components/delivery/delivery.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent
    },
    {
      path:'item/:id',component:ItemComponent
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'menu',component:MenuComponent
    },
    {
      path:'registration',component:RegistrationComponent
    },
    {
      path:'cart',component:CartComponent
    },{
      path:'cutomproduct',component:CustomproductComponent
    },
    {
      path:'delivery/:id',component:DeliveryComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
