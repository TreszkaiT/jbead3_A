import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SocialmediaDataService } from 'src/app/api/domain/socialmedia';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as socialmediaActions from './socialmedia.actions';

@Injectable()
export class SocialmediaEffects {
    addSocialmedia$ = createEffect(() =>
        this.actions$.pipe(
            ofType(socialmediaActions.addSocialmedia),
            switchMap((action) =>
                this.socialmediaDataService.add$(action.socialmedia).pipe(
                    map((socialmedia) => {
                        return socialmediaActions.addSocialmediaSuccess({ socialmedia });
                    }),
                    catchError((error) => {
                        return of(socialmediaActions.addSocialmediaFail({ error }));
                    })
                )
            )
        )
    );
    getSocialmedia$ = createEffect(() =>
        this.actions$.pipe(
            ofType(socialmediaActions.getSocialmedia),
            switchMap((action) =>
                this.socialmediaDataService.get$(action.id).pipe(
                    map((socialmedia) => {
                        return socialmediaActions.getSocialmediaSuccess({
                            socialmedia: socialmedia || null,
                        });
                    }),
                    catchError((error) => {
                        return of(socialmediaActions.getSocialmediaFail({ error }));
                    })
                )
            )
        )
    );
    listSocialmedias$ = createEffect(() =>
        this.actions$.pipe(
            ofType(socialmediaActions.listSocialmedias),
            switchMap((action) =>
                this.socialmediaDataService.list$().pipe(
                    map((socialmedias) => {
                        return socialmediaActions.listSocialmediasSuccess({
                            socialmedias,
                        });
                    }),
                    catchError((error) => {
                        return of(socialmediaActions.listSocialmediasFail({ error }));
                    })
                )
            )
        )
    );
    updateSocialmedia$ = createEffect(() =>
        this.actions$.pipe(
            ofType(socialmediaActions.updateSocialmedia),
            switchMap((action) =>
                this.socialmediaDataService.update$(action.socialmedia).pipe(
                    map((socialmedia) => {
                        return socialmediaActions.updateSocialmediaSuccess({
                            socialmedia: {
                                changes: { ...socialmedia },
                                id: (socialmedia && socialmedia.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(socialmediaActions.updateSocialmediaFail({ error }));
                    })
                )
            )
        )
    );

    deleteSocialmedia$ = createEffect(() =>
        this.actions$.pipe(
            ofType(socialmediaActions.deleteSocialmedia),
            switchMap((action) =>
                this.socialmediaDataService.delete$(action.id).pipe(
                    map((socialmedia) => {
                        return socialmediaActions.deleteSocialmediaSuccess({
                            id: action.id,
                        });
                    }),
                    catchError((error) => {
                        return of(socialmediaActions.deleteSocialmediaFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private socialmediaDataService: SocialmediaDataService
    ) {}
}
