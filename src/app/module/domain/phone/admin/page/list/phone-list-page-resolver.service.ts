import { PhoneStoreService } from 'src/app/api/domain/phone';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class PhoneListPageResolverService implements Resolve<void> {
    constructor(private phoneStoreService: PhoneStoreService) {}

    public resolve(): void {
        this.phoneStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.phoneStoreService.dispatchListEntitiesAction();
    }
}
