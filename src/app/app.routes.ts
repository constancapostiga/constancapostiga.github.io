// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ArpeggioPage } from './pages/arpeggio/arpeggio';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'arpeggio', component: ArpeggioPage },
  { path: '**', redirectTo: '' }
];