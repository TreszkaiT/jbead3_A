import { StudyDataService } from 'src/app/api/domain/study';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudyDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: StudyDataService,
            useClass:StudyDataServiceImpl,
        },
    ],
})
export class StudyDataModule {}