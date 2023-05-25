import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { PhoneTableComponent } from './component';

@NgModule({
    declarations: [PhoneTableComponent],
    exports: [PhoneTableComponent],
    imports: [CommonModule, SharedModule],
})
export class PhoneCollectionModule {}
