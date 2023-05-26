import { SocialmediaStoreService } from 'src/app/api/domain/socialmedia';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class SocialmediaListPageResolverService implements Resolve<void> {
    constructor(private socialmediaStoreService: SocialmediaStoreService) {}

    public resolve(): void {
        this.socialmediaStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.socialmediaStoreService.dispatchListEntitiesAction();
    }
}
