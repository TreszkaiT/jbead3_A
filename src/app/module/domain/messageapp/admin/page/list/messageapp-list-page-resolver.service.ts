import { MessageappStoreService } from 'src/app/api/domain/messageapp';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class MessageappListPageResolverService implements Resolve<void> {
    constructor(private messageappStoreService: MessageappStoreService) {}

    public resolve(): void {
        this.messageappStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.messageappStoreService.dispatchListEntitiesAction();
    }
}
