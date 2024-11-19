import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'actualites',
    loadChildren: () => import('./actualites/actualites.module').then(m => m.ActualitesModule)
  }, 
  { 
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
