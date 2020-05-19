import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ItemComponent } from './components/item/item.component';
import { CustomproductComponent } from './components/customproduct/customproduct.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { MaincategoriesComponent } from './maincategories/maincategories.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule}from  '@angular/material/toolbar';
import { MatIconModule}from  '@angular/material/icon';
import { MatSidenavModule}from  '@angular/material/sidenav';
import { MatListModule}from  '@angular/material/list';
import { MatButtonModule}from  '@angular/material/button';
import { MatMenuModule}from  '@angular/material/menu';
import { MatCardModule}from  '@angular/material/card';
import { BirthdayCakesComponent } from './components/categories/birthday-cakes/birthday-cakes.component';
import { CorporateCakesComponent } from './components/categories/corporate-cakes/corporate-cakes.component';
import { SpecialOccasionCakesComponent } from './components/categories/special-occasion-cakes/special-occasion-cakes.component';
import { CookiesCupcakesComponent } from './components/categories/cookies-cupcakes/cookies-cupcakes.component';
import { DessertsComponent } from './components/categories/desserts/desserts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { WeddingCakesComponent } from './components/categories/wedding-cakes/wedding-cakes.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    LoginComponent,
    RegistrationComponent,
    ItemComponent,
    CustomproductComponent,
    DeliveryComponent,
    MaincategoriesComponent,
    CorporateCakesComponent,
    SpecialOccasionCakesComponent,
    CookiesCupcakesComponent,
    DessertsComponent,
    CategoriesComponent,
    BirthdayCakesComponent,
    WeddingCakesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HammerModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    BrowserDynamicTestingModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
