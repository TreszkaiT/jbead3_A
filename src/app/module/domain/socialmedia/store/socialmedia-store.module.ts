import { SOCIALMEDIA_FEATURE_KEY, SocialmediaStoreService } from 'src/app/api/domain/socialmedia';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SocialmediaStoreServiceImpl } from './service';
import { SocialmediaEffects } from './state/socialmedia.effects';
import * as fromSocialmedia from './state/socialmedia.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(SOCIALMEDIA_FEATURE_KEY, fromSocialmedia.reducer),
        EffectsModule.forFeature([SocialmediaEffects]),
    ],
    providers: [
        {
            provide: SocialmediaStoreService,
            useClass: SocialmediaStoreServiceImpl,
        },
    ],
})
export class SocialmediaStoreModule {}
