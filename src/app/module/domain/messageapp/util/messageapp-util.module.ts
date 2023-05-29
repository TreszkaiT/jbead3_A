import { MessageappUtilService } from 'src/app/api/domain/messageapp';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageappUtilServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: MessageappUtilService,
            useClass: MessageappUtilServiceImpl,
        },
    ],
})
export class MessageappUtilModule {}
