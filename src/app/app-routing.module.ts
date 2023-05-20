import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './frame/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home-page.module').then( (module) => module.HomePageModule),
  },
  {
    path: 'config',
    loadChildren: () =>
      import('./page/config/config-page.module').then(
        (module) => module.ConfigPageModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { HomePageModule } from './page/home/home-page.module';
  exports: [RouterModule]
})
export class AppRoutingModule { }
