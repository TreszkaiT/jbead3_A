import { STUDY_FEATURE_KEY, StudyEntity } from 'src/app/api/domain/study';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { StudyState, studyAdapter } from './study.reducer';

export const getStudyState = createFeatureSelector<StudyState>(STUDY_FEATURE_KEY);

const { selectAll, selectEntities } = studyAdapter.getSelectors();           // Reducer-ben lévő studyAdapter segítségével tudok gyorsan selectálni StudyEntity-ket itt letebb

export const getStudyLoading = createSelector(
    getStudyState,
    (state: StudyState) => state.loading
);

export const getStudyError = createSelector(
    getStudyState,
    (state: StudyState) => state.error
);

export const getAllStudy = createSelector(getStudyState, (state: StudyState) =>
    selectAll(state)
);

export const getStudyEntities = createSelector(getStudyState, (state: StudyState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getStudyState,
    (state: StudyState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getStudyState,
	(state: StudyState) => state.isNewEntityButtonEnabled
);

export const selectStudy = createSelector(
    getStudyEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectStudyById = (id: string) =>
    createSelector(getStudyEntities, (studyEntities: Dictionary<StudyEntity>) => {     
        return studyEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy StudyEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
