import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PictureDataService } from 'src/app/api/domain/picture';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as pictureActions from './picture.actions';

@Injectable()
export class PictureEffects {
    addPicture$ = createEffect(() =>
        this.actions$.pipe(
            ofType(pictureActions.addPicture),
            switchMap((action) =>
                this.pictureDataService.add$(action.picture).pipe(
                    map((picture) => {
                        return pictureActions.addPictureSuccess({ picture });
                    }),
                    catchError((error) => {
                        return of(pictureActions.addPictureFail({ error }));
                    })
                )
            )
        )
    );
    getPicture$ = createEffect(() =>
        this.actions$.pipe(
            ofType(pictureActions.getPicture),
            switchMap((action) =>
                this.pictureDataService.get$(action.id).pipe(
                    map((picture) => {
                        return pictureActions.getPictureSuccess({
                            picture: picture || null,
                        });
                    }),
                    catchError((error) => {
                        return of(pictureActions.getPictureFail({ error }));
                    })
                )
            )
        )
    );
    listPictures$ = createEffect(() =>
        this.actions$.pipe(
            ofType(pictureActions.listPictures),
            switchMap((action) =>
                this.pictureDataService.list$().pipe(
                    map((pictures) => {
                        return pictureActions.listPicturesSuccess({
                            pictures,
                        });
                    }),
                    catchError((error) => {
                        return of(pictureActions.listPicturesFail({ error }));
                    })
                )
            )
        )
    );
    updatePicture$ = createEffect(() =>
        this.actions$.pipe(
            ofType(pictureActions.updatePicture),
            switchMap((action) =>
                this.pictureDataService.update$(action.picture).pipe(
                    map((picture) => {
                        return pictureActions.updatePictureSuccess({
                            picture: {
                                changes: { ...picture },
                                id: (picture && picture.id) || '',
                            },
                        });
                    }),
                    catchError((error) => {
                        return of(pictureActions.updatePictureFail({ error }));
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private pictureDataService: PictureDataService
    ) {}
}
