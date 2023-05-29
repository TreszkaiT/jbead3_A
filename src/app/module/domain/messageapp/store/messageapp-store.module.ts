import { MESSAGEAPP_FEATURE_KEY, MessageappStoreService } from 'src/app/api/domain/messageapp';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MessageappStoreServiceImpl } from './service';
import { MessageappEffects } from './state/messageapp.effects';
import * as fromMessageapp from './state/messageapp.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(MESSAGEAPP_FEATURE_KEY, fromMessageapp.reducer),
        EffectsModule.forFeature([MessageappEffects]),
    ],
    providers: [
        {
            provide: MessageappStoreService,
            useClass: MessageappStoreServiceImpl,
        },
    ],
})
export class MessageappStoreModule {}
