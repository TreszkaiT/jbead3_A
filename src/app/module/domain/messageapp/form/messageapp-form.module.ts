import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../common';
import { MessageappFormComponent } from './component';

@NgModule({
    declarations: [MessageappFormComponent],
    exports: [MessageappFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class MessageappFormModule {}
