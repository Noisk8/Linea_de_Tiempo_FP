import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'timeline', loadComponent: () => import('./pages/timeline/timeline.component').then(m => m.TimelineComponent) },
  { path: 'presidentes/:id', loadComponent: () => import('./pages/detail/detail.component').then(m => m.DetailComponent) },
  { path: 'notas', loadComponent: () => import('./pages/notas/notas.component').then(m => m.NotasComponent) },
  { path: 'referencias', loadComponent: () => import('./pages/referencias/referencias.component').then(m => m.ReferenciasComponent) },
  { path: '**', redirectTo: '' }
];
