import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

// Route Configuration
export const routes:Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'tagcloud', loadChildren: './modules/tagcloud/tagcloud.module#TagcloudModule'},
  {path: 'about', loadChildren: './modules/about/about.module#AboutModule'},
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
