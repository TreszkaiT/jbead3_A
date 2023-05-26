import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhoneDataModule } from './data';
import { PhoneStoreModule } from './store';
import { PhoneUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhoneDataModule,                                 //          Data műveletek behúzása
    PhoneStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    PhoneUtilModule
  ]
})
export class PhoneModule { }
