import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProofexperienceDataModule } from './data';
import { ProofexperienceStoreModule } from './store';
import { ProofexperienceUtilModule } from './util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProofexperienceDataModule,                                 //          Data műveletek behúzása
    ProofexperienceStoreModule,                                // NgRx 2.: Store műveletek és  Store-ban lévő State elkészítése, és az Effectek deklarálása
    ProofexperienceUtilModule
  ]
})
export class ProofexperienceModule { }
