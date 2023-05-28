import { LANGUAGE_FEATURE_KEY, LanguageStoreService } from 'src/app/api/domain/language';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LanguageStoreServiceImpl } from './service';
import { LanguageEffects } from './state/language.effects';
import * as fromLanguage from './state/language.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(LANGUAGE_FEATURE_KEY, fromLanguage.reducer),
        EffectsModule.forFeature([LanguageEffects]),
    ],
    providers: [
        {
            provide: LanguageStoreService,
            useClass: LanguageStoreServiceImpl,
        },
    ],
})
export class LanguageStoreModule {}
