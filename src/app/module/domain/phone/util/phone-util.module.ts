import { PhoneUtilService } from 'src/app/api/domain/phone';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhoneUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: PhoneUtilService,
            useClass: PhoneUtilServiceImpl,
        },
    ],
})
export class PhoneUtilModule {}
