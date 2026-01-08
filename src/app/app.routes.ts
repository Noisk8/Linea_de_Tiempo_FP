import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NotasComponent } from './pages/notas/notas.component';
import { ReferenciasComponent } from './pages/referencias/referencias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'presidentes/:id', component: DetailComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'referencias', component: ReferenciasComponent },
  { path: '**', redirectTo: '' }
];
