import { StudyUtilService } from 'src/app/api/domain/study';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudyUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: StudyUtilService,
            useClass: StudyUtilServiceImpl,
        },
    ],
})
export class StudyUtilModule {}
