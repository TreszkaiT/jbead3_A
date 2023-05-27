import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { SocialmediaTableComponent } from './component';

@NgModule({
    declarations: [SocialmediaTableComponent],
    exports: [SocialmediaTableComponent],
    imports: [CommonModule, SharedModule],
})
export class SocialmediaCollectionModule {}
