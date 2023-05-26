import { PictureUtilService } from 'src/app/api/domain/picture';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PictureUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: PictureUtilService,
            useClass: PictureUtilServiceImpl,
        },
    ],
})
export class PictureUtilModule {}
