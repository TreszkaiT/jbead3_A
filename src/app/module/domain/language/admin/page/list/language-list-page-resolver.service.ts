import { LanguageStoreService } from 'src/app/api/domain/language';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class LanguageListPageResolverService implements Resolve<void> {
    constructor(private languageStoreService: LanguageStoreService) {}

    public resolve(): void {
        this.languageStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.languageStoreService.dispatchListEntitiesAction();
    }
}
