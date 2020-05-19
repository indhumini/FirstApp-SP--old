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
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { MaincategoriesComponent } from './maincategories/maincategories.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BirthdaycakesComponent } from './birthdaycakes/birthdaycakes.component';
import { BirthdayCakesComponent } from './components/categories/birthday-cakes/birthday-cakes.component';
import { WeddingCakesComponent } from './components/categories/wedding-cakes/wedding-cakes.component';
import { CorporateCakesComponent } from './components/categories/corporate-cakes/corporate-cakes.component';
import { SpecialOccasionCakesComponent } from './components/categories/special-occasion-cakes/special-occasion-cakes.component';
import { CookiesCupcakesComponent } from './components/categories/cookies-cupcakes/cookies-cupcakes.component';
import { DessertsComponent } from './components/categories/desserts/desserts.component';

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
    CategoriesComponent,
    MaincategoriesComponent,
    BirthdaycakesComponent,
    BirthdayCakesComponent,
    WeddingCakesComponent,
    CorporateCakesComponent,
    SpecialOccasionCakesComponent,
    CookiesCupcakesComponent,
    DessertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HammerModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
