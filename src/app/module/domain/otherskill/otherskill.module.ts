import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OtherskillDataModule } from './data';
import { OtherskillStoreModule } from './store';
import { OtherskillUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OtherskillDataModule,                                 //          Data műveletek behúzása
    OtherskillStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    OtherskillUtilModule
  ]
})
export class OtherskillModule { }
