import { ProofexperienceUtilService } from 'src/app/api/domain/proofexperience';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProofexperienceUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: ProofexperienceUtilService,
            useClass: ProofexperienceUtilServiceImpl,
        },
    ],
})
export class ProofexperienceUtilModule {}
