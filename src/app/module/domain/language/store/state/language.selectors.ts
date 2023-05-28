import { LANGUAGE_FEATURE_KEY, LanguageEntity } from 'src/app/api/domain/language';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LanguageState, languageAdapter } from './language.reducer';

export const getLanguageState = createFeatureSelector<LanguageState>(LANGUAGE_FEATURE_KEY);

const { selectAll, selectEntities } = languageAdapter.getSelectors();           // Reducer-ben lévő languageAdapter segítségével tudok gyorsan selectálni LanguageEntity-ket itt letebb

export const getLanguageLoading = createSelector(
    getLanguageState,
    (state: LanguageState) => state.loading
);

export const getLanguageError = createSelector(
    getLanguageState,
    (state: LanguageState) => state.error
);

export const getAllLanguage = createSelector(getLanguageState, (state: LanguageState) =>
    selectAll(state)
);

export const getLanguageEntities = createSelector(getLanguageState, (state: LanguageState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getLanguageState,
    (state: LanguageState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getLanguageState,
	(state: LanguageState) => state.isNewEntityButtonEnabled
);

export const selectLanguage = createSelector(
    getLanguageEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectLanguageById = (id: string) =>
    createSelector(getLanguageEntities, (languageEntities: Dictionary<LanguageEntity>) => {     
        return languageEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy LanguageEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
