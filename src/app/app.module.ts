import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './frame/page-not-found/page-not-found.component';
import { SharedModule } from './module/common';
import { MenubarModule } from 'primeng/menubar';
import { ConfigModule } from './module/config/config.module';
import { AuthenticationStoreModule } from './core/authentication/store/authentication-store.module';
import { AuthenticationDataModule } from './core/authentication/data/authentication-data.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
