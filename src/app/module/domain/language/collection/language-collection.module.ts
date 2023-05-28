import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { LanguageTableComponent } from './component';

@NgModule({
    declarations: [LanguageTableComponent],
    exports: [LanguageTableComponent],
    imports: [CommonModule, SharedModule],
})
export class LanguageCollectionModule {}
