import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PhoneDataService } from 'src/app/api/domain/phone';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as phoneActions from './phone.actions';

@Injectable()
export class PhoneEffects {
    addPhone$ = createEffect(() =>
        this.actions$.pipe(
            ofType(phoneActions.addPhone),
            switchMap((action) =>
                this.phoneDataService.add$(action.phone).pipe(
                    map((phone) => {
                        return phoneActions.addPhoneSuccess({ phone });
                    }),
                    catchError((error) => {
                        return of(phoneActions.addPhoneFail({ error }));
                    })
                )
            )
        )
    );
    getPhone$ = createEffect(() =>
        this.actions$.pipe(
            ofType(phoneActions.getPhone),
            switchMap((action) =>
                this.phoneDataService.get$(action.id).pipe(
                    map((phone) => {
                        return phoneActions.getPhoneSuccess({
                            phone: phone || null,
                        });
                    }),
                    catchError((error) => {
                        return of(phoneActions.getPhoneFail({ error }));
                    })
                )
            )
        )
    );
    listPhones$ = createEffect(() =>
        this.actions$.pipe(
            ofType(phoneActions.listPhones),
            switchMap((action) =>
                this.phoneDataService.list$().pipe(
                    map((phones) => {
                        return phoneActions.listPhonesSuccess({
                            phones,
                        });
                    }),
                    catchError((error) => {
                        return of(phoneActions.listPhonesFail({ error }));
                    })
                )
            )
        )
    );
    updatePhone$ = createEffect(() =>
        this.actions$.pipe(
            ofType(phoneActions.updatePhone),
            switchMap((action) =>
                this.phoneDataService.update$(action.phone).pipe(
                    map((phone) => {
                        return phoneActions.updatePhoneSuccess({
                            phone: {
                                changes: { ...phone },
                                id: (phone && phone.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(phoneActions.updatePhoneFail({ error }));
                    })
                )
            )
        )
    );

    deletePhone$ = createEffect(() =>
        this.actions$.pipe(
            ofType(phoneActions.deletePhone),
            switchMap((action) =>
                this.phoneDataService.delete$(action.id).pipe(
                    map((phone) => {
                        return phoneActions.deletePhoneSuccess({
                            id: action.id,
                        });
                    }),
                    catchError((error) => {
                        return of(phoneActions.deletePhoneFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private phoneDataService: PhoneDataService
    ) {}
}
