import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../common';
import { LanguageFormComponent } from './component';

@NgModule({
    declarations: [LanguageFormComponent],
    exports: [LanguageFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class LanguageFormModule {}
