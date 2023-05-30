import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudyDataModule } from './data';
import { StudyStoreModule } from './store';
import { StudyUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudyDataModule,                                 //          Data műveletek behúzása
    StudyStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    StudyUtilModule
  ]
})
export class StudyModule { }
