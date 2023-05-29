import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StudyDataService } from 'src/app/api/domain/study';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as studyActions from './study.actions';

@Injectable()
export class StudyEffects {
    addStudy$ = createEffect(() =>
        this.actions$.pipe(
            ofType(studyActions.addStudy),
            switchMap((action) =>
                this.studyDataService.add$(action.study).pipe(
                    map((study) => {
                        return studyActions.addStudySuccess({ study });
                    }),
                    catchError((error) => {
                        return of(studyActions.addStudyFail({ error }));
                    })
                )
            )
        )
    );
    getStudy$ = createEffect(() =>
        this.actions$.pipe(
            ofType(studyActions.getStudy),
            switchMap((action) =>
                this.studyDataService.get$(action.id).pipe(
                    map((study) => {
                        return studyActions.getStudySuccess({
                            study: study || null,
                        });
                    }),
                    catchError((error) => {
                        return of(studyActions.getStudyFail({ error }));
                    })
                )
            )
        )
    );
    listStudys$ = createEffect(() =>
        this.actions$.pipe(
            ofType(studyActions.listStudys),
            switchMap((action) =>
                this.studyDataService.list$().pipe(
                    map((studys) => {
                        return studyActions.listStudysSuccess({
                            studys,
                        });
                    }),
                    catchError((error) => {
                        return of(studyActions.listStudysFail({ error }));
                    })
                )
            )
        )
    );
    updateStudy$ = createEffect(() =>
        this.actions$.pipe(
            ofType(studyActions.updateStudy),
            switchMap((action) =>
                this.studyDataService.update$(action.study).pipe(
                    map((study) => {
                        return studyActions.updateStudySuccess({
                            study: {
                                changes: { ...study },
                                id: (study && study.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(studyActions.updateStudyFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private studyDataService: StudyDataService
    ) {}
}
