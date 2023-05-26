import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PictureDataModule } from './data';
import { PictureStoreModule } from './store';
import { PictureUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PictureDataModule,                                 //          Data műveletek behúzása
    PictureStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    PictureUtilModule
  ]
})
export class PictureModule { }
