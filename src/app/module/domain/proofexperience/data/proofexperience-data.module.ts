import { ProofexperienceDataService } from 'src/app/api/domain/proofexperience';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProofexperienceDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ProofexperienceDataService,
            useClass:ProofexperienceDataServiceImpl,
        },
    ],
})
export class ProofexperienceDataModule {}