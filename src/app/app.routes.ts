import { Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginComponent} from './Components/login/login.component';
import {RegisterComponent} from './Components/register/register.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
