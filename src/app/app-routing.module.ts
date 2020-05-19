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
import { BirthdayCakesComponent } from './components/categories/birthday-cakes/birthday-cakes.component';
import { WeddingCakesComponent } from './components/categories/wedding-cakes/wedding-cakes.component';
import { CorporateCakesComponent } from './components/categories/corporate-cakes/corporate-cakes.component';
import { SpecialOccasionCakesComponent } from './components/categories/special-occasion-cakes/special-occasion-cakes.component';
import { CookiesCupcakesComponent } from './components/categories/cookies-cupcakes/cookies-cupcakes.component';
import { DessertsComponent } from './components/categories/desserts/desserts.component';
import { CategoriesComponent } from './components/categories/categories.component';


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
    {
      path:'birthday-cakes',component:BirthdayCakesComponent
    },
    {
      path:'wedding_cakes',component:WeddingCakesComponent
    },
    {
      path:'corporate_cakes',component:CorporateCakesComponent
    },
    {
      path:'special_occasion_cakes',component:SpecialOccasionCakesComponent
    },
    {
      path:'cookies_cupcakes',component:CookiesCupcakesComponent
    },
    {
      path:'desserts',component:DessertsComponent
    },
    {
      path:'categories',component:CategoriesComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
