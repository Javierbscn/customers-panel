import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelComponent } from './components/panel/panel.component';
import { AllCustomersComponent } from './components/all-customers/all-customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelComponent,
    AllCustomersComponent,
    EditCustomerComponent,
    LoginComponent,
    RegisterComponent,
    ConfigurationComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
