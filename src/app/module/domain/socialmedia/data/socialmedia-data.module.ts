import { SocialmediaDataService } from 'src/app/api/domain/socialmedia';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SocialmediaDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: SocialmediaDataService,
            useClass:SocialmediaDataServiceImpl,
        },
    ],
})
export class SocialmediaDataModule {}