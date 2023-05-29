import { PROOFEXPERIENCE_FEATURE_KEY, ProofexperienceStoreService } from 'src/app/api/domain/proofexperience';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProofexperienceStoreServiceImpl } from './service';
import { ProofexperienceEffects } from './state/proofexperience.effects';
import * as fromProofexperience from './state/proofexperience.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(PROOFEXPERIENCE_FEATURE_KEY, fromProofexperience.reducer),
        EffectsModule.forFeature([ProofexperienceEffects]),
    ],
    providers: [
        {
            provide: ProofexperienceStoreService,
            useClass: ProofexperienceStoreServiceImpl,
        },
    ],
})
export class ProofexperienceStoreModule {}
