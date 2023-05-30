import { Observable } from 'rxjs';
import {
    StudyEntity,
    StudyEntityAdd,
    StudyEntityUpdate,
    StudyStoreService,
} from 'src/app/api/domain/study';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as studyActions from '../state/study.actions';
import * as fromStudy from '../state/study.reducer';
import * as StudySelectors from '../state/study.selectors';

@Injectable()
export class StudyStoreServiceImpl extends StudyStoreService {
    public constructor(private store: Store<fromStudy.StudyPartialState>) {   // ezt a store: -t egy ilyen StudyPartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(study: StudyEntityAdd): void {
        this.store.dispatch(studyActions.addStudy({ study }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			studyActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(studyActions.getStudy({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(studyActions.listStudys());
    }

    public dispatchUpdateEntityAction(study: StudyEntityUpdate): void {
        this.store.dispatch(studyActions.updateStudy({ study }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(StudySelectors.getStudyLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<StudyEntity | undefined> {
        return this.store.pipe(select(StudySelectors.selectStudyById(id)));
    }

    public selectEntityList$(): Observable<StudyEntity[]> {
        return this.store.pipe(select(StudySelectors.getAllStudy));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(StudySelectors.isNewEntityButtonEnabled)
		);
	} 
}
