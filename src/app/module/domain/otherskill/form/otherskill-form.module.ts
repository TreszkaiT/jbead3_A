import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../common';
import { OtherskillFormComponent } from './component';

@NgModule({
    declarations: [OtherskillFormComponent],
    exports: [OtherskillFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class OtherskillFormModule {}
