import { MessageappDataService } from 'src/app/api/domain/messageapp';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageappDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: MessageappDataService,
            useClass:MessageappDataServiceImpl,
        },
    ],
})
export class MessageappDataModule {}