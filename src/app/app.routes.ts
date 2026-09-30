// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ArpeggioPage } from './pages/arpeggio/arpeggio';
import { ContactComponent } from './pages/contact/contact';
import { TurismoPage } from './pages/turismo/turismo';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'arpeggio', component: ArpeggioPage },
  { path: 'turismo', component: TurismoPage },
  { path: '**', redirectTo: '' }
];