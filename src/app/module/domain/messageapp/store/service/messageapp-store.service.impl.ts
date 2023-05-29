import { Observable } from 'rxjs';
import {
    MessageappEntity,
    MessageappEntityAdd,
    MessageappEntityUpdate,
    MessageappStoreService,
} from 'src/app/api/domain/messageapp';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as messageappActions from '../state/messageapp.actions';
import * as fromMessageapp from '../state/messageapp.reducer';
import * as MessageappSelectors from '../state/messageapp.selectors';

@Injectable()
export class MessageappStoreServiceImpl extends MessageappStoreService {
    public constructor(private store: Store<fromMessageapp.MessageappPartialState>) {   // ezt a store: -t egy ilyen MessageappPartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(messageapp: MessageappEntityAdd): void {
        this.store.dispatch(messageappActions.addMessageapp({ messageapp }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			messageappActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(messageappActions.getMessageapp({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(messageappActions.listMessageapps());
    }

    public dispatchUpdateEntityAction(messageapp: MessageappEntityUpdate): void {
        this.store.dispatch(messageappActions.updateMessageapp({ messageapp }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(MessageappSelectors.getMessageappLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<MessageappEntity | undefined> {
        return this.store.pipe(select(MessageappSelectors.selectMessageappById(id)));
    }

    public selectEntityList$(): Observable<MessageappEntity[]> {
        return this.store.pipe(select(MessageappSelectors.getAllMessageapp));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(MessageappSelectors.isNewEntityButtonEnabled)
		);
	} 
}
