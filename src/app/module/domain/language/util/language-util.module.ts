import { LanguageUtilService } from 'src/app/api/domain/language';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LanguageUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: LanguageUtilService,
            useClass: LanguageUtilServiceImpl,
        },
    ],
})
export class LanguageUtilModule {}
