import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { MessageappTableComponent } from './component';

@NgModule({
    declarations: [MessageappTableComponent],
    exports: [MessageappTableComponent],
    imports: [CommonModule, SharedModule],
})
export class MessageappCollectionModule {}
