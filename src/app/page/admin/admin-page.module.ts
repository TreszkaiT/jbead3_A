
// import { AuthenticationStoreService } from 'src/app/api/authentication';
import { CityDataService, CityStoreService } from 'src/app/api/city';
// import { AuthenticationStoreServiceImpl } from 'src/app/core/authentication/store/service';
import { CityModule } from 'src/app/module/city/city.module';
import { CityDataServiceImpl } from 'src/app/module/city/data/service';
import { CityStoreServiceImpl } from 'src/app/module/city/store/service';
import { SharedModule } from 'src/app/module/common';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { AdminListsPageResolverService } from './component/list';
import { AdminPageComponent } from './component/page/admin-page.component';
import { UserStoreService } from 'src/app/api/user';
import { UserStoreServiceImpl } from 'src/app/module/user/store/service';
import { UserListPageResolverService } from 'src/app/module/user/admin/page/list';
import { CityListPageResolverService } from 'src/app/module/city/admin/page/list';

@NgModule({
  declarations: [AdminPageComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    //SharedModule
    CityModule                                                    // e nélkül City module nem jelenik meg az admin menü city bal menüpont (entitás) - ra kattintva
  ],
  // providers: [
  //   {
  //     provide: AuthenticationStoreService,
  //     useClass: AuthenticationStoreServiceImpl,
  //   }
  // ]
  providers: [                                                     // az app konfigját tartalmazza: apiUrl, title, stb...
    {
      provide: UserStoreService,
      useClass: UserStoreServiceImpl,
    },  
    {
      provide: CityStoreService,
      useClass: CityStoreServiceImpl,
    },

    // {
    //   provide: CityDataService,
    //   useClass: CityDataServiceImpl,
    // }
    //AdminListsPageResolverService,                                // hogy a listákat egyből a serverről betöltse a dispatchListEntity, mert amgy csak akkor tölti be, ha az adminon belül az egyik Entitás-ról átkattintunk a másikra és vissza 
    //UserListPageResolverService,
    //CityListPageResolverService
  ]
})
export class AdminPageModule {}
