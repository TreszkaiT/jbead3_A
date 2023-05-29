import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OtherskillDataService } from 'src/app/api/domain/otherskill';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as otherskillActions from './otherskill.actions';

@Injectable()
export class OtherskillEffects {
    addOtherskill$ = createEffect(() =>
        this.actions$.pipe(
            ofType(otherskillActions.addOtherskill),
            switchMap((action) =>
                this.otherskillDataService.add$(action.otherskill).pipe(
                    map((otherskill) => {
                        return otherskillActions.addOtherskillSuccess({ otherskill });
                    }),
                    catchError((error) => {
                        return of(otherskillActions.addOtherskillFail({ error }));
                    })
                )
            )
        )
    );
    getOtherskill$ = createEffect(() =>
        this.actions$.pipe(
            ofType(otherskillActions.getOtherskill),
            switchMap((action) =>
                this.otherskillDataService.get$(action.id).pipe(
                    map((otherskill) => {
                        return otherskillActions.getOtherskillSuccess({
                            otherskill: otherskill || null,
                        });
                    }),
                    catchError((error) => {
                        return of(otherskillActions.getOtherskillFail({ error }));
                    })
                )
            )
        )
    );
    listOtherskills$ = createEffect(() =>
        this.actions$.pipe(
            ofType(otherskillActions.listOtherskills),
            switchMap((action) =>
                this.otherskillDataService.list$().pipe(
                    map((otherskills) => {
                        return otherskillActions.listOtherskillsSuccess({
                            otherskills,
                        });
                    }),
                    catchError((error) => {
                        return of(otherskillActions.listOtherskillsFail({ error }));
                    })
                )
            )
        )
    );
    updateOtherskill$ = createEffect(() =>
        this.actions$.pipe(
            ofType(otherskillActions.updateOtherskill),
            switchMap((action) =>
                this.otherskillDataService.update$(action.otherskill).pipe(
                    map((otherskill) => {
                        return otherskillActions.updateOtherskillSuccess({
                            otherskill: {
                                changes: { ...otherskill },
                                id: (otherskill && otherskill.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(otherskillActions.updateOtherskillFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private otherskillDataService: OtherskillDataService
    ) {}
}
