import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelComponent } from './components/panel/panel.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: PanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'customer/edit/:id', component: EditCustomerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
