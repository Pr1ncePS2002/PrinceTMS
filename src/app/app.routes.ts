import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [{ path: '', redirectTo:'/home',pathMatch:'full'},{path:'login', component:LoginComponent}, {path:'register', component:RegisterComponent}, {path:'home', component:DashboardComponent}];
