import { PHONE_FEATURE_KEY, PhoneStoreService } from 'src/app/api/domain/phone';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PhoneStoreServiceImpl } from './service';
import { PhoneEffects } from './state/phone.effects';
import * as fromPhone from './state/phone.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(PHONE_FEATURE_KEY, fromPhone.reducer),
        EffectsModule.forFeature([PhoneEffects]),
    ],
    providers: [
        {
            provide: PhoneStoreService,
            useClass: PhoneStoreServiceImpl,
        },
    ],
})
export class PhoneStoreModule {}
