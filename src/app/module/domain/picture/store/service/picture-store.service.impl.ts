import { Observable } from 'rxjs';
import {
    PictureEntity,
    PictureEntityAdd,
    PictureEntityUpdate,
    PictureStoreService,
} from 'src/app/api/domain/picture';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as pictureActions from '../state/picture.actions';
import * as fromPicture from '../state/picture.reducer';
import * as PictureSelectors from '../state/picture.selectors';

@Injectable()
export class PictureStoreServiceImpl extends PictureStoreService {
    public constructor(private store: Store<fromPicture.PicturePartialState>) {   // ezt a store: -t egy ilyen PicturePartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(picture: PictureEntityAdd): void {
        this.store.dispatch(pictureActions.addPicture({ picture }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			pictureActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(pictureActions.getPicture({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(pictureActions.listPictures());
    }

    public dispatchUpdateEntityAction(picture: PictureEntityUpdate): void {
        this.store.dispatch(pictureActions.updatePicture({ picture }));
    }

    public dispatchDeleteEntityAction(id: string): void {
        this.store.dispatch(pictureActions.deletePicture({ id }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(PictureSelectors.getPictureLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<PictureEntity | undefined> {
        return this.store.pipe(select(PictureSelectors.selectPictureById(id)));
    }

    public selectEntityList$(): Observable<PictureEntity[]> {
        return this.store.pipe(select(PictureSelectors.getAllPicture));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(PictureSelectors.isNewEntityButtonEnabled)
		);
	} 
}
