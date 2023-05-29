import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageappDataModule } from './data';
import { MessageappStoreModule } from './store';
import { MessageappUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageappDataModule,                                 //          Data műveletek behúzása
    MessageappStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    MessageappUtilModule
  ]
})
export class MessageappModule { }
