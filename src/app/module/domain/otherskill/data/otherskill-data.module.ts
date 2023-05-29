import { OtherskillDataService } from 'src/app/api/domain/otherskill';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OtherskillDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: OtherskillDataService,
            useClass:OtherskillDataServiceImpl,
        },
    ],
})
export class OtherskillDataModule {}