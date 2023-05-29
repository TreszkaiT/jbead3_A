import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { ProofexperienceTableComponent } from './component';

@NgModule({
    declarations: [ProofexperienceTableComponent],
    exports: [ProofexperienceTableComponent],
    imports: [CommonModule, SharedModule],
})
export class ProofexperienceCollectionModule {}
