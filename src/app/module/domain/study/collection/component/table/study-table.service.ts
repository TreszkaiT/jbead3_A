import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    StudyEntity,
    StudyStoreService,
    StudyTableParams,
} from 'src/app/api/domain/study';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class StudyTableService {
    private params!: StudyTableParams;
    private params$$: ReplaySubject<StudyTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private studyStoreService: StudyStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editStudy(study: StudyEntity): void {
        this.router.navigate(['../edit', study?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public deleteStudy(study: StudyEntity): void {
        this.studyStoreService.dispatchDeleteEntityAction(study.id);
    }

    public init$(): Observable<StudyTableParams> {
        
        // this.studyStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.studyStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((studys) => {
                this.params = {
                    //selectedEntity,
                    studys,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
