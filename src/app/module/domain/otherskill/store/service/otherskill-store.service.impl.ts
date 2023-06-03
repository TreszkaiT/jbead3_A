import { Observable } from 'rxjs';
import {
    OtherskillEntity,
    OtherskillEntityAdd,
    OtherskillEntityUpdate,
    OtherskillStoreService,
} from 'src/app/api/domain/otherskill';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as otherskillActions from '../state/otherskill.actions';
import * as fromOtherskill from '../state/otherskill.reducer';
import * as OtherskillSelectors from '../state/otherskill.selectors';

@Injectable()
export class OtherskillStoreServiceImpl extends OtherskillStoreService {
    public constructor(private store: Store<fromOtherskill.OtherskillPartialState>) {   // ezt a store: -t egy ilyen OtherskillPartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(otherskill: OtherskillEntityAdd): void {
        this.store.dispatch(otherskillActions.addOtherskill({ otherskill }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			otherskillActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(otherskillActions.getOtherskill({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(otherskillActions.listOtherskills());
    }

    public dispatchUpdateEntityAction(otherskill: OtherskillEntityUpdate): void {
        this.store.dispatch(otherskillActions.updateOtherskill({ otherskill }));
    }

    public dispatchDeleteEntityAction(id: string): void {
        this.store.dispatch(otherskillActions.deleteOtherskill({ id }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(OtherskillSelectors.getOtherskillLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<OtherskillEntity | undefined> {
        return this.store.pipe(select(OtherskillSelectors.selectOtherskillById(id)));
    }

    public selectEntityList$(): Observable<OtherskillEntity[]> {
        return this.store.pipe(select(OtherskillSelectors.getAllOtherskill));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(OtherskillSelectors.isNewEntityButtonEnabled)
		);
	} 
}
