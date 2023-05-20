import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home-page.module').then( (module) => module.HomePageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // import { HomePageModule } from './page/home/home-page.module';
  exports: [RouterModule]
})
export class AppRoutingModule { }
