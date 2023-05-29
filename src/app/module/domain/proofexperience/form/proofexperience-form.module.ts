import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../common';
import { ProofexperienceFormComponent } from './component';

@NgModule({
    declarations: [ProofexperienceFormComponent],
    exports: [ProofexperienceFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class ProofexperienceFormModule {}
