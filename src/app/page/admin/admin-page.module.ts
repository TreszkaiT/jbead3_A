
// import { AuthenticationStoreService } from 'src/app/api/authentication';
// import { AuthenticationStoreServiceImpl } from 'src/app/core/authentication/store/service';
import { CityModule } from 'src/app/module/city/city.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { AdminPageComponent } from './component/page/admin-page.component';
import { SharedModule } from 'src/app/module/common';

@NgModule({
  declarations: [AdminPageComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    //SharedModule
    //CityModule                                                    // e nélkül City module nem jelenik meg az admin menü city bal menüpont (entitás) - ra kattintva
  ],
  // providers: [
  //   {
  //     provide: AuthenticationStoreService,
  //     useClass: AuthenticationStoreServiceImpl,
  //   }
  // ]
})
export class AdminPageModule {}
