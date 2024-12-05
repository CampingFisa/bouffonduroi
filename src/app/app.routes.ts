import { Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutUsComponent} from './about-us/about-us.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutUsComponent }
];
