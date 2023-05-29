import { OtherskillStoreService } from 'src/app/api/domain/otherskill';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class OtherskillListPageResolverService implements Resolve<void> {
    constructor(private otherskillStoreService: OtherskillStoreService) {}

    public resolve(): void {
        this.otherskillStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.otherskillStoreService.dispatchListEntitiesAction();
    }
}
