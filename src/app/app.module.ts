import { MenubarModule } from 'primeng/menubar';
import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CityStoreService } from './api/domain/city';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationDataModule } from './core/authentication/data/authentication-data.module';
import { AuthenticationStoreModule } from './core/authentication/store/authentication-store.module';
import { ConfigService } from './core/config';
import { PageNotFoundComponent } from './frame/page-not-found/page-not-found.component';
import { SharedModule } from './module/common';
import { ConfigModule } from './module/config/config.module';
import { AdminPageGuard } from './page/admin/guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MenubarModule,
    StoreModule.forRoot(                                                        // NgRx: 1. Store és Effect elkészítése  és Config betöltése
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ConfigModule,
    AuthenticationStoreModule,                                              // e nélkül nem megy a login és registration html oldala
    AuthenticationDataModule                                                // u.a.                                                                // hogy a config globálisan be legyen töltve már az App indulásától kezdve
  ],
  providers: [ 
    AdminPageGuard,
    ConfigService,                                                          // az app konfigját tartalmazza: apiUrl, title, stb...
    // {
    //   provide: CityStoreService,
    //   useClass: CityStoreServiceImpl,
    // }
  ],                                            // e nélkül nem megy az admin html oldala
  bootstrap: [AppComponent]
})
export class AppModule { }
