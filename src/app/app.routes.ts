import { Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AuthenticationComponent} from './authentication/authentication.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: AuthenticationComponent }
];
