import { LanguageDataService } from 'src/app/api/domain/language';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguageDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: LanguageDataService,
            useClass:LanguageDataServiceImpl,
        },
    ],
})
export class LanguageDataModule {}