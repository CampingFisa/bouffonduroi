import { Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {SwordPageComponent} from './sword-page/sword-page.component'

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'swords-page', component: SwordPageComponent },
];
