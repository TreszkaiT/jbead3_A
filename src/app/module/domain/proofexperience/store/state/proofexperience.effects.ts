import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProofexperienceDataService } from 'src/app/api/domain/proofexperience';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as proofexperienceActions from './proofexperience.actions';

@Injectable()
export class ProofexperienceEffects {
    addProofexperience$ = createEffect(() =>
        this.actions$.pipe(
            ofType(proofexperienceActions.addProofexperience),
            switchMap((action) =>
                this.proofexperienceDataService.add$(action.proofexperience).pipe(
                    map((proofexperience) => {
                        return proofexperienceActions.addProofexperienceSuccess({ proofexperience });
                    }),
                    catchError((error) => {
                        return of(proofexperienceActions.addProofexperienceFail({ error }));
                    })
                )
            )
        )
    );
    getProofexperience$ = createEffect(() =>
        this.actions$.pipe(
            ofType(proofexperienceActions.getProofexperience),
            switchMap((action) =>
                this.proofexperienceDataService.get$(action.id).pipe(
                    map((proofexperience) => {
                        return proofexperienceActions.getProofexperienceSuccess({
                            proofexperience: proofexperience || null,
                        });
                    }),
                    catchError((error) => {
                        return of(proofexperienceActions.getProofexperienceFail({ error }));
                    })
                )
            )
        )
    );
    listProofexperiences$ = createEffect(() =>
        this.actions$.pipe(
            ofType(proofexperienceActions.listProofexperiences),
            switchMap((action) =>
                this.proofexperienceDataService.list$().pipe(
                    map((proofexperiences) => {
                        return proofexperienceActions.listProofexperiencesSuccess({
                            proofexperiences,
                        });
                    }),
                    catchError((error) => {
                        return of(proofexperienceActions.listProofexperiencesFail({ error }));
                    })
                )
            )
        )
    );
    updateProofexperience$ = createEffect(() =>
        this.actions$.pipe(
            ofType(proofexperienceActions.updateProofexperience),
            switchMap((action) =>
                this.proofexperienceDataService.update$(action.proofexperience).pipe(
                    map((proofexperience) => {
                        return proofexperienceActions.updateProofexperienceSuccess({
                            proofexperience: {
                                changes: { ...proofexperience },
                                id: (proofexperience && proofexperience.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(proofexperienceActions.updateProofexperienceFail({ error }));
                    })
                )
            )
        )
    );

    deleteProofexperience$ = createEffect(() =>
        this.actions$.pipe(
            ofType(proofexperienceActions.deleteProofexperience),
            switchMap((action) =>
                this.proofexperienceDataService.delete$(action.id).pipe(
                    map((proofexperience) => {
                        return proofexperienceActions.deleteProofexperienceSuccess({
                            id: action.id,
                        });
                    }),
                    catchError((error) => {
                        return of(proofexperienceActions.deleteProofexperienceFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private proofexperienceDataService: ProofexperienceDataService
    ) {}
}
