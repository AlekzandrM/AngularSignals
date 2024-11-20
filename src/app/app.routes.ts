import { Routes } from '@angular/router';
import {input} from "@angular/core";

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
    loadComponent: () => import('./features/signals-api/components/signal-parent/signal-parent.component').then(m => m.SignalParentComponent),
    children: [
      {
        path: 'signal',
        loadComponent: () => import('./features/signals-api/components/signal-api/signal-api.component').then(m => m.SignalAPI),
      },
      {
        path: 'computed',
        loadComponent: () => import('./features/signals-api/components/computed/computed.component').then(m => m.ComputedComponent)
      },
      {
        path: 'effect',
        loadComponent: () => import('./features/signals-api/components/effect/effect.component').then(m => m.EffectComponent)
      },
    ]
  },
  {
    path: 'push',
    loadComponent: () => import('./features/push-poll-pull/components/push-poll-pull/push-poll-pull.component').then(m => m.PushPollPullComponent)
  },
  {
    path: 'rxjs',
    loadComponent: () => import('./features/rxjs/components/rxjx/rxjx.component').then(m => m.RxjxComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./features/new-api/Components/new-api-parent/new-api-parent.component').then(m => m.NewApiParentComponent),
    children: [
      {
        path: 'input',
        loadComponent: () => import('./features/new-api/Components/input/input.component').then(m => m.InputComponent)
      },
      {
        path: 'model',
        loadComponent: () => import('./features/new-api/Components/model/model.component').then(m => m.ModelComponent)
      }
    ]
  }
];
