
// import { AuthenticationStoreService } from 'src/app/api/authentication';
import { CityStoreService } from 'src/app/api/city';
// import { AuthenticationStoreServiceImpl } from 'src/app/core/authentication/store/service';
import { CityModule } from 'src/app/module/city/city.module';
import { CityStoreServiceImpl } from 'src/app/module/city/store/service';
import { SharedModule } from 'src/app/module/common';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { AdminPageComponent } from './component/page/admin-page.component';

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
      provide: CityStoreService,
      useClass: CityStoreServiceImpl,
    }
  ]
})
export class AdminPageModule {}
