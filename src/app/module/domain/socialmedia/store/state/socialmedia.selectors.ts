import { SOCIALMEDIA_FEATURE_KEY, SocialmediaEntity } from 'src/app/api/domain/socialmedia';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SocialmediaState, socialmediaAdapter } from './socialmedia.reducer';

export const getSocialmediaState = createFeatureSelector<SocialmediaState>(SOCIALMEDIA_FEATURE_KEY);

const { selectAll, selectEntities } = socialmediaAdapter.getSelectors();           // Reducer-ben lévő socialmediaAdapter segítségével tudok gyorsan selectálni SocialmediaEntity-ket itt letebb

export const getSocialmediaLoading = createSelector(
    getSocialmediaState,
    (state: SocialmediaState) => state.loading
);

export const getSocialmediaError = createSelector(
    getSocialmediaState,
    (state: SocialmediaState) => state.error
);

export const getAllSocialmedia = createSelector(getSocialmediaState, (state: SocialmediaState) =>
    selectAll(state)
);

export const getSocialmediaEntities = createSelector(getSocialmediaState, (state: SocialmediaState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getSocialmediaState,
    (state: SocialmediaState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getSocialmediaState,
	(state: SocialmediaState) => state.isNewEntityButtonEnabled
);

export const selectSocialmedia = createSelector(
    getSocialmediaEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectSocialmediaById = (id: string) =>
    createSelector(getSocialmediaEntities, (socialmediaEntities: Dictionary<SocialmediaEntity>) => {     
        return socialmediaEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy SocialmediaEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
