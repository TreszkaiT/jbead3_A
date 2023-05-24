import { PHONE_FEATURE_KEY, PhoneDataService } from 'src/app/api/domain/phone';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PhoneDataServiceImpl } from '../data/service';
import { PhoneEffects } from './state/phone.effects';
import { phoneReducer } from './state/phone.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(PHONE_FEATURE_KEY, phoneReducer),
    EffectsModule.forFeature([PhoneEffects]),
  ],
  providers: [
    {
      provide: PhoneDataService,
      useClass: PhoneDataServiceImpl,
    }
  ]
})
export class PhoneStoreModule { }
