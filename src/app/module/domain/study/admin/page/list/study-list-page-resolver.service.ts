import { StudyStoreService } from 'src/app/api/domain/study';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class StudyListPageResolverService implements Resolve<void> {
    constructor(private studyStoreService: StudyStoreService) {}

    public resolve(): void {
        this.studyStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.studyStoreService.dispatchListEntitiesAction();
    }
}
