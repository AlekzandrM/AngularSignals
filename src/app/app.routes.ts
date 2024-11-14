import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cd/diagram',
    pathMatch: 'full',
  },
  {
    path: 'cd',
    loadComponent: () => import('./features/cd/components/cd-parent/cd-parent.component').then(m => m.CdParentComponent),
    children: [
      {
        path: 'diagram',
        loadComponent: () => import('./features/cd/components/cd-diagram/cd-diagram.component').then(m => m.CdDiagramComponent)
      },
      {
        path: 'problems',
        loadComponent: () => import('./features/cd/components/cd-problems/cd-problems.component').then(m => m.CdProblemsComponent)
      },
    ]
  },
  {
    path: 'api',
    loadComponent: () => import('./features/signals-api/components/signal-api/signal-api.component').then(m => m.SignalAPI),
  }
];
