import { SocialmediaUtilService } from 'src/app/api/domain/socialmedia';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SocialmediaUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: SocialmediaUtilService,
            useClass: SocialmediaUtilServiceImpl,
        },
    ],
})
export class SocialmediaUtilModule {}
