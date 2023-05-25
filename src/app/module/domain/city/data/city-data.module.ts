import { CityDataService } from 'src/app/api/domain/city';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CityDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CityDataService,
            useClass:CityDataServiceImpl,
        },
    ],
})
export class CityDataModule {}