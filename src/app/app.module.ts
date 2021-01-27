import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, Settings } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FlashMessagesModule } from 'flash-messages-angular';
import { FormsModule } from "@angular/forms";

import { environment } from "../environments/environment";

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
import { CustomerService } from './services/customer.service';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'customers-panel'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
