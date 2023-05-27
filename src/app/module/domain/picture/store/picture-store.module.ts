import { PICTURE_FEATURE_KEY, PictureStoreService } from 'src/app/api/domain/picture';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PictureStoreServiceImpl } from './service';
import { PictureEffects } from './state/picture.effects';
import * as fromPicture from './state/picture.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(PICTURE_FEATURE_KEY, fromPicture.reducer),
        EffectsModule.forFeature([PictureEffects]),
    ],
    providers: [
        {
            provide: PictureStoreService,
            useClass: PictureStoreServiceImpl,
        },
    ],
})
export class PictureStoreModule {}
