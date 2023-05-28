import { Observable } from 'rxjs';
import {
    LanguageEntity,
    LanguageEntityAdd,
    LanguageEntityUpdate,
    LanguageStoreService,
} from 'src/app/api/domain/language';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as languageActions from '../state/language.actions';
import * as fromLanguage from '../state/language.reducer';
import * as LanguageSelectors from '../state/language.selectors';

@Injectable()
export class LanguageStoreServiceImpl extends LanguageStoreService {
    public constructor(private store: Store<fromLanguage.LanguagePartialState>) {   // ezt a store: -t egy ilyen LanguagePartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(language: LanguageEntityAdd): void {
        this.store.dispatch(languageActions.addLanguage({ language }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			languageActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(languageActions.getLanguage({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(languageActions.listLanguages());
    }

    public dispatchUpdateEntityAction(language: LanguageEntityUpdate): void {
        this.store.dispatch(languageActions.updateLanguage({ language }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(LanguageSelectors.getLanguageLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<LanguageEntity | undefined> {
        return this.store.pipe(select(LanguageSelectors.selectLanguageById(id)));
    }

    public selectEntityList$(): Observable<LanguageEntity[]> {
        return this.store.pipe(select(LanguageSelectors.getAllLanguage));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(LanguageSelectors.isNewEntityButtonEnabled)
		);
	} 
}
