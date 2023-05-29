import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MessageappDataService } from 'src/app/api/domain/messageapp';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as messageappActions from './messageapp.actions';

@Injectable()
export class MessageappEffects {
    addMessageapp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(messageappActions.addMessageapp),
            switchMap((action) =>
                this.messageappDataService.add$(action.messageapp).pipe(
                    map((messageapp) => {
                        return messageappActions.addMessageappSuccess({ messageapp });
                    }),
                    catchError((error) => {
                        return of(messageappActions.addMessageappFail({ error }));
                    })
                )
            )
        )
    );
    getMessageapp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(messageappActions.getMessageapp),
            switchMap((action) =>
                this.messageappDataService.get$(action.id).pipe(
                    map((messageapp) => {
                        return messageappActions.getMessageappSuccess({
                            messageapp: messageapp || null,
                        });
                    }),
                    catchError((error) => {
                        return of(messageappActions.getMessageappFail({ error }));
                    })
                )
            )
        )
    );
    listMessageapps$ = createEffect(() =>
        this.actions$.pipe(
            ofType(messageappActions.listMessageapps),
            switchMap((action) =>
                this.messageappDataService.list$().pipe(
                    map((messageapps) => {
                        return messageappActions.listMessageappsSuccess({
                            messageapps,
                        });
                    }),
                    catchError((error) => {
                        return of(messageappActions.listMessageappsFail({ error }));
                    })
                )
            )
        )
    );
    updateMessageapp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(messageappActions.updateMessageapp),
            switchMap((action) =>
                this.messageappDataService.update$(action.messageapp).pipe(
                    map((messageapp) => {
                        return messageappActions.updateMessageappSuccess({
                            messageapp: {
                                changes: { ...messageapp },
                                id: (messageapp && messageapp.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(messageappActions.updateMessageappFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private messageappDataService: MessageappDataService
    ) {}
}
