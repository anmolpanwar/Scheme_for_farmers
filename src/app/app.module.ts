import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { LoginSuccessFarmerComponent } from './login-success-farmer/login-success-farmer.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { SellHistoryComponent } from './sell-history/sell-history.component';
import { ViewMarketplaceComponent } from './view-marketplace/view-marketplace.component';
import { BidderWelcomeComponent } from './bidder-welcome/bidder-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    RegistrationComponentComponent,
    FarmerRegistrationComponent,
    BidderRegistrationComponent,
    LoginSuccessFarmerComponent,
    SellRequestComponent,
    SellHistoryComponent,
    ViewMarketplaceComponent,
    BidderWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
