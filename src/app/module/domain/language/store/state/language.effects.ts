import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LanguageDataService } from 'src/app/api/domain/language';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as languageActions from './language.actions';

@Injectable()
export class LanguageEffects {
    addLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(languageActions.addLanguage),
            switchMap((action) =>
                this.languageDataService.add$(action.language).pipe(
                    map((language) => {
                        return languageActions.addLanguageSuccess({ language });
                    }),
                    catchError((error) => {
                        return of(languageActions.addLanguageFail({ error }));
                    })
                )
            )
        )
    );
    getLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(languageActions.getLanguage),
            switchMap((action) =>
                this.languageDataService.get$(action.id).pipe(
                    map((language) => {
                        return languageActions.getLanguageSuccess({
                            language: language || null,
                        });
                    }),
                    catchError((error) => {
                        return of(languageActions.getLanguageFail({ error }));
                    })
                )
            )
        )
    );
    listLanguages$ = createEffect(() =>
        this.actions$.pipe(
            ofType(languageActions.listLanguages),
            switchMap((action) =>
                this.languageDataService.list$().pipe(
                    map((languages) => {
                        return languageActions.listLanguagesSuccess({
                            languages,
                        });
                    }),
                    catchError((error) => {
                        return of(languageActions.listLanguagesFail({ error }));
                    })
                )
            )
        )
    );
    updateLanguage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(languageActions.updateLanguage),
            switchMap((action) =>
                this.languageDataService.update$(action.language).pipe(
                    map((language) => {
                        return languageActions.updateLanguageSuccess({
                            language: {
                                changes: { ...language },
                                id: (language && language.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(languageActions.updateLanguageFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private languageDataService: LanguageDataService
    ) {}
}
