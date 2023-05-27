import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SocialmediaDataModule } from './data';
import { SocialmediaStoreModule } from './store';
import { SocialmediaUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialmediaDataModule,                                 //          Data műveletek behúzása
    SocialmediaStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    SocialmediaUtilModule
  ]
})
export class SocialmediaModule { }
