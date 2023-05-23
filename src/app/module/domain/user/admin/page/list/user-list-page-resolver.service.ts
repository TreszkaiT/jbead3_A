import { UserStoreService } from 'src/app/api/domain/user';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class UserListPageResolverService implements Resolve<void> {
    constructor(private userStoreService: UserStoreService) {}

    public resolve(): void {
        this.userStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.userStoreService.dispatchListEntitiesAction();
    }
}
