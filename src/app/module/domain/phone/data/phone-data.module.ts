import { PhoneDataService } from 'src/app/api/domain/phone';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhoneDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PhoneDataService,
            useClass:PhoneDataServiceImpl,
        },
    ],
})
export class PhoneDataModule {}