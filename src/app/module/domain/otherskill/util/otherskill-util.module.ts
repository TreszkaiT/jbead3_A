import { OtherskillUtilService } from 'src/app/api/domain/otherskill';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OtherskillUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: OtherskillUtilService,
            useClass: OtherskillUtilServiceImpl,
        },
    ],
})
export class OtherskillUtilModule {}
