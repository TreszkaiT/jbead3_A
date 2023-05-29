import { ProofexperienceStoreService } from 'src/app/api/domain/proofexperience';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class ProofexperienceListPageResolverService implements Resolve<void> {
    constructor(private proofexperienceStoreService: ProofexperienceStoreService) {}

    public resolve(): void {
        this.proofexperienceStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.proofexperienceStoreService.dispatchListEntitiesAction();
    }
}
