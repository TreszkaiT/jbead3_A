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

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';   // TranslateModule - saját kezűleg adhatok hozzá fordítást  |||  TranslateLoader - letölthetek fordítást
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    AuthenticationDataModule,                                                // u.a.                                                                // hogy a config globálisan be legyen töltve már az App indulásától kezdve
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
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

// required for AOT compilation
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http);
// }
