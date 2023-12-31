import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: "", component: HomeComponent, title:"Faculty of Family Medicine App, West African College of Physicians" },
  { path: "access/register", component: RegisterComponent },
  { path: "access/register/verifyemail", component: RegisterComponent },
  { path: "access/login", component: LoginComponent }
];
