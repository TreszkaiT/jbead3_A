import { PictureStoreService } from 'src/app/api/domain/picture';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class PictureListPageResolverService implements Resolve<void> {
    constructor(private pictureStoreService: PictureStoreService) {}

    public resolve(): void {
        this.pictureStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.pictureStoreService.dispatchListEntitiesAction();
    }
}
