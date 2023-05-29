import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { StudyTableComponent } from './component';

@NgModule({
    declarations: [StudyTableComponent],
    exports: [StudyTableComponent],
    imports: [CommonModule, SharedModule],
})
export class StudyCollectionModule {}
