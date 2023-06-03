import { Observable } from 'rxjs';
import {
    ProofexperienceEntity,
    ProofexperienceEntityAdd,
    ProofexperienceEntityUpdate,
    ProofexperienceStoreService,
} from 'src/app/api/domain/proofexperience';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as proofexperienceActions from '../state/proofexperience.actions';
import * as fromProofexperience from '../state/proofexperience.reducer';
import * as ProofexperienceSelectors from '../state/proofexperience.selectors';

@Injectable()
export class ProofexperienceStoreServiceImpl extends ProofexperienceStoreService {
    public constructor(private store: Store<fromProofexperience.ProofexperiencePartialState>) {   // ezt a store: -t egy ilyen ProofexperiencePartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(proofexperience: ProofexperienceEntityAdd): void {
        this.store.dispatch(proofexperienceActions.addProofexperience({ proofexperience }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			proofexperienceActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(proofexperienceActions.getProofexperience({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(proofexperienceActions.listProofexperiences());
    }

    public dispatchUpdateEntityAction(proofexperience: ProofexperienceEntityUpdate): void {
        this.store.dispatch(proofexperienceActions.updateProofexperience({ proofexperience }));
    }

    public dispatchDeleteEntityAction(id: string): void {
        this.store.dispatch(proofexperienceActions.deleteProofexperience({ id }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(ProofexperienceSelectors.getProofexperienceLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<ProofexperienceEntity | undefined> {
        return this.store.pipe(select(ProofexperienceSelectors.selectProofexperienceById(id)));
    }

    public selectEntityList$(): Observable<ProofexperienceEntity[]> {
        return this.store.pipe(select(ProofexperienceSelectors.getAllProofexperience));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(ProofexperienceSelectors.isNewEntityButtonEnabled)
		);
	} 
}
