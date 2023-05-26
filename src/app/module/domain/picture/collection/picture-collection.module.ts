import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { PictureTableComponent } from './component';

@NgModule({
    declarations: [PictureTableComponent],
    exports: [PictureTableComponent],
    imports: [CommonModule, SharedModule],
})
export class PictureCollectionModule {}
