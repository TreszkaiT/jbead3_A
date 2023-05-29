import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { OtherskillTableComponent } from './component';

@NgModule({
    declarations: [OtherskillTableComponent],
    exports: [OtherskillTableComponent],
    imports: [CommonModule, SharedModule],
})
export class OtherskillCollectionModule {}
