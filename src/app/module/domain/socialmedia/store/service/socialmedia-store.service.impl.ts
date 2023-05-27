import { Observable } from 'rxjs';
import {
    SocialmediaEntity,
    SocialmediaEntityAdd,
    SocialmediaEntityUpdate,
    SocialmediaStoreService,
} from 'src/app/api/domain/socialmedia';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as socialmediaActions from '../state/socialmedia.actions';
import * as fromSocialmedia from '../state/socialmedia.reducer';
import * as SocialmediaSelectors from '../state/socialmedia.selectors';

@Injectable()
export class SocialmediaStoreServiceImpl extends SocialmediaStoreService {
    public constructor(private store: Store<fromSocialmedia.SocialmediaPartialState>) {   // ezt a store: -t egy ilyen SocialmediaPartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(socialmedia: SocialmediaEntityAdd): void {
        this.store.dispatch(socialmediaActions.addSocialmedia({ socialmedia }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			socialmediaActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(socialmediaActions.getSocialmedia({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(socialmediaActions.listSocialmedias());
    }

    public dispatchUpdateEntityAction(socialmedia: SocialmediaEntityUpdate): void {
        this.store.dispatch(socialmediaActions.updateSocialmedia({ socialmedia }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(SocialmediaSelectors.getSocialmediaLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<SocialmediaEntity | undefined> {
        return this.store.pipe(select(SocialmediaSelectors.selectSocialmediaById(id)));
    }

    public selectEntityList$(): Observable<SocialmediaEntity[]> {
        return this.store.pipe(select(SocialmediaSelectors.getAllSocialmedia));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(SocialmediaSelectors.isNewEntityButtonEnabled)
		);
	} 
}
