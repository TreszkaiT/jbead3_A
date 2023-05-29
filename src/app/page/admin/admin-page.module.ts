
// import { AuthenticationStoreService } from 'src/app/api/authentication';
import { CityDataService, CityStoreService } from 'src/app/api/domain/city';
import { UserStoreService } from 'src/app/api/domain/user';
import { SharedModule } from 'src/app/module/common';
// import { AuthenticationStoreServiceImpl } from 'src/app/core/authentication/store/service';
import { CityModule } from 'src/app/module/domain/city/city.module';
import { CityStoreServiceImpl } from 'src/app/module/domain/city/store/service';
import { PhoneModule } from 'src/app/module/domain/phone/phone.module';
import { UserStoreServiceImpl } from 'src/app/module/domain/user/store/service';
import { UserModule } from 'src/app/module/domain/user/user.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { LeftSidebarComponent } from './component/left-sidebar/left-sidebar.component';
import { AdminListsPageResolverService } from './component/list';
import { AdminPageComponent } from './component/page/admin-page.component';
import { SocialmediaModule } from 'src/app/module/domain/socialmedia/socialmedia.module';
import { SocialmediaStoreService } from 'src/app/api/domain/socialmedia';
import { SocialmediaStoreServiceImpl } from 'src/app/module/domain/socialmedia/store/service';
import { PictureModule } from 'src/app/module/domain/picture/picture.module';
import { PictureStoreService } from 'src/app/api/domain/picture';
import { PictureStoreServiceImpl } from 'src/app/module/domain/picture/store/service';
import { PhoneStoreService } from 'src/app/api/domain/phone';
import { PhoneStoreServiceImpl } from 'src/app/module/domain/phone/store/service';
import { LanguageModule } from 'src/app/module/domain/language/language.module';
import { LanguageStoreService } from 'src/app/api/domain/language';
import { LanguageStoreServiceImpl } from 'src/app/module/domain/language/store/service';

@NgModule({
  declarations: [AdminPageComponent, LeftSidebarComponent],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    //SharedModule
    CityModule,                                                    // e nélkül City module nem jelenik meg az admin menü city bal menüpont (entitás) - ra kattintva
    UserModule,
    PhoneModule,
    SocialmediaModule,
    PictureModule,
    PhoneModule,
    LanguageModule,
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
    {
      provide: SocialmediaStoreService,
      useClass: SocialmediaStoreServiceImpl
    },
    {
      provide: PictureStoreService,
      useClass: PictureStoreServiceImpl
    },
    {
      provide: PhoneStoreService,
      useClass: PhoneStoreServiceImpl
    },
    {
      provide: LanguageStoreService,
      useClass: LanguageStoreServiceImpl
    },
    // {
    //   provide: CityDataService,
    //   useClass: CityDataServiceImpl,
    // }
    AdminListsPageResolverService,                                // hogy a listákat egyből a serverről betöltse a dispatchListEntity, mert amgy csak akkor tölti be, ha az adminon belül az egyik Entitás-ról átkattintunk a másikra és vissza 
    //UserListPageResolverService,
    //CityListPageResolverService
  ]
})
export class AdminPageModule {}
