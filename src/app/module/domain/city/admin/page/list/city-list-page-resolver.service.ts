import { CityStoreService } from 'src/app/api/domain/city';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class CityListPageResolverService implements Resolve<void> {             // ide tesszük a serverről jött listázásokat
    constructor(private cityStoreService: CityStoreService) {}

    public resolve(): void {
        this.cityStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.cityStoreService.dispatchListEntitiesAction();
    }
}
