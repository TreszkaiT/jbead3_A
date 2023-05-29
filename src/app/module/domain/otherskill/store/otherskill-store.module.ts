import { OTHERSKILL_FEATURE_KEY, OtherskillStoreService } from 'src/app/api/domain/otherskill';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { OtherskillStoreServiceImpl } from './service';
import { OtherskillEffects } from './state/otherskill.effects';
import * as fromOtherskill from './state/otherskill.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(OTHERSKILL_FEATURE_KEY, fromOtherskill.reducer),
        EffectsModule.forFeature([OtherskillEffects]),
    ],
    providers: [
        {
            provide: OtherskillStoreService,
            useClass: OtherskillStoreServiceImpl,
        },
    ],
})
export class OtherskillStoreModule {}
