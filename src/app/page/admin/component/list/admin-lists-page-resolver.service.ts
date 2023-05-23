import { CityStoreService } from 'src/app/api/domain/city';
import { UserStoreService } from 'src/app/api/domain/user';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class AdminListsPageResolverService implements Resolve<void> {               // azért, hogy az admin oldalban a City és a User, stb. Entitások táblázatában már előre kiolvassa a listát az Angular Framework
    constructor(private userStoreService: UserStoreService, private cityStoreService: CityStoreService) {}

    public resolve(): void {
        //this.userStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.userStoreService.dispatchListEntitiesAction();
        this.cityStoreService.dispatchListEntitiesAction();
    }
}
