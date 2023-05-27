import { PictureDataService } from 'src/app/api/domain/picture';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PictureDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PictureDataService,
            useClass:PictureDataServiceImpl,
        },
    ],
})
export class PictureDataModule {}