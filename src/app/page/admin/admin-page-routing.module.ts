import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './component/page/admin-page.component';
// import { AdminListsPageResolverService } from './component/list';
// import { CityListPageResolverService } from 'src/app/module/domain/city/admin/page/list';
// import { UserListPageResolverService } from 'src/app/module/domain/user/admin/page/list';

const routes: Routes = [
  {
    // path: '', 
    // component: AdminPageComponent,
    // pathMatch: 'full',
    path: '',                                                             // ha az admin URL meg van hívva
    component: AdminPageComponent,
    children: [
      {
        path: 'user',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/domain/user/admin/user-admin-page.module').then(
            (module) => module.UserAdminPageModule
          ),
          //resolve: { data: AdminListsPageResolverService },
          //resolve: { data: UserListPageResolverService },
      },
      {
        path: 'city',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('src/app/module/domain/city/admin/city-admin-page.module').then(
            (module) => module.CityAdminPageModule
          ),
          //resolve: { data: AdminListsPageResolverService },
          //resolve: { data: CityListPageResolverService },
      },
      {
        path: 'language',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/domain/language/admin/language-admin-page.module').then(
            (module) => module.LanguageAdminPageModule
          ),
      },  
      {
        path: 'otherskill',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/domain/otherskill/admin/otherskill-admin-page.module').then(
            (module) => module.OtherskillAdminPageModule
          ),
      },    
      {
        path: 'phone',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/domain/phone/admin/phone-admin-page.module').then(
            (module) => module.PhoneAdminPageModule
          ),
      },  
      {
        path: 'picture',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/domain/picture/admin/picture-admin-page.module').then(
            (module) => module.PictureAdminPageModule
          ),
      },     
      // {
      //   path: 'study',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('../../module/domain/study/admin/study-admin-page.module').then(
      //       (module) => module.StudyAdminPageModule
      //     ),
      // },   
      // {
      //   path: 'proofexperience',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
      //   loadChildren: () =>
      //     import('../../module/domain/proofexperience/admin/proofexperience-admin-page.module').then(
      //       (module) => module.ProofexperienceAdminPageModule
      //     ),
      // }, 
      {
        path: 'socialmedia',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/domain/socialmedia/admin/socialmedia-admin-page.module').then(
            (module) => module.SocialmediaAdminPageModule
          ),
      },   
      {
        path: 'messageapp',                                                   // Lazy modon meg a city-t, ha szükség lezs rá
        loadChildren: () =>
          import('../../module/domain/messageapp/admin/messageapp-admin-page.module').then(
            (module) => module.MessageappAdminPageModule
          ),
      },                                      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
