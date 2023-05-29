import { STUDY_FEATURE_KEY, StudyStoreService } from 'src/app/api/domain/study';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { StudyStoreServiceImpl } from './service';
import { StudyEffects } from './state/study.effects';
import * as fromStudy from './state/study.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(STUDY_FEATURE_KEY, fromStudy.reducer),
        EffectsModule.forFeature([StudyEffects]),
    ],
    providers: [
        {
            provide: StudyStoreService,
            useClass: StudyStoreServiceImpl,
        },
    ],
})
export class StudyStoreModule {}
