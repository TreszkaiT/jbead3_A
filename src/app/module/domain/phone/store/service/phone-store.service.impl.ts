import { Observable } from 'rxjs';
import {
    PhoneEntity,
    PhoneEntityAdd,
    PhoneEntityUpdate,
    PhoneStoreService,
} from 'src/app/api/domain/phone';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as phoneActions from '../state/phone.actions';
import * as fromPhone from '../state/phone.reducer';
import * as PhoneSelectors from '../state/phone.selectors';

@Injectable()
export class PhoneStoreServiceImpl extends PhoneStoreService {
    public constructor(private store: Store<fromPhone.PhonePartialState>) {   // ezt a store: -t egy ilyen PhonePartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(phone: PhoneEntityAdd): void {
        this.store.dispatch(phoneActions.addPhone({ phone }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			phoneActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(phoneActions.getPhone({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(phoneActions.listPhones());
    }

    public dispatchUpdateEntityAction(phone: PhoneEntityUpdate): void {
        this.store.dispatch(phoneActions.updatePhone({ phone }));
    }

    public dispatchDeleteEntityAction(id: string): void {
        this.store.dispatch(phoneActions.deletePhone({ id }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(PhoneSelectors.getPhoneLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<PhoneEntity | undefined> {
        return this.store.pipe(select(PhoneSelectors.selectPhoneById(id)));
    }

    public selectEntityList$(): Observable<PhoneEntity[]> {
        return this.store.pipe(select(PhoneSelectors.getAllPhone));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(PhoneSelectors.isNewEntityButtonEnabled)
		);
	} 
}
