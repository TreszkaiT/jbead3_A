import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguageDataModule } from './data';
import { LanguageStoreModule } from './store';
import { LanguageUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LanguageDataModule,                                 //          Data műveletek behúzása
    LanguageStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    LanguageUtilModule
  ]
})
export class LanguageModule { }
