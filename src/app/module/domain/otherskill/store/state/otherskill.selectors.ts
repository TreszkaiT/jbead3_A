import { OTHERSKILL_FEATURE_KEY, OtherskillEntity } from 'src/app/api/domain/otherskill';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { OtherskillState, otherskillAdapter } from './otherskill.reducer';

export const getOtherskillState = createFeatureSelector<OtherskillState>(OTHERSKILL_FEATURE_KEY);

const { selectAll, selectEntities } = otherskillAdapter.getSelectors();           // Reducer-ben lévő otherskillAdapter segítségével tudok gyorsan selectálni OtherskillEntity-ket itt letebb

export const getOtherskillLoading = createSelector(
    getOtherskillState,
    (state: OtherskillState) => state.loading
);

export const getOtherskillError = createSelector(
    getOtherskillState,
    (state: OtherskillState) => state.error
);

export const getAllOtherskill = createSelector(getOtherskillState, (state: OtherskillState) =>
    selectAll(state)
);

export const getOtherskillEntities = createSelector(getOtherskillState, (state: OtherskillState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getOtherskillState,
    (state: OtherskillState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getOtherskillState,
	(state: OtherskillState) => state.isNewEntityButtonEnabled
);

export const selectOtherskill = createSelector(
    getOtherskillEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectOtherskillById = (id: string) =>
    createSelector(getOtherskillEntities, (otherskillEntities: Dictionary<OtherskillEntity>) => {     
        return otherskillEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy OtherskillEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
