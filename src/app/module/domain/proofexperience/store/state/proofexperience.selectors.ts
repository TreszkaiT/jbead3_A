import { PROOFEXPERIENCE_FEATURE_KEY, ProofexperienceEntity } from 'src/app/api/domain/proofexperience';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProofexperienceState, proofexperienceAdapter } from './proofexperience.reducer';

export const getProofexperienceState = createFeatureSelector<ProofexperienceState>(PROOFEXPERIENCE_FEATURE_KEY);

const { selectAll, selectEntities } = proofexperienceAdapter.getSelectors();           // Reducer-ben lévő proofexperienceAdapter segítségével tudok gyorsan selectálni ProofexperienceEntity-ket itt letebb

export const getProofexperienceLoading = createSelector(
    getProofexperienceState,
    (state: ProofexperienceState) => state.loading
);

export const getProofexperienceError = createSelector(
    getProofexperienceState,
    (state: ProofexperienceState) => state.error
);

export const getAllProofexperience = createSelector(getProofexperienceState, (state: ProofexperienceState) =>
    selectAll(state)
);

export const getProofexperienceEntities = createSelector(getProofexperienceState, (state: ProofexperienceState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getProofexperienceState,
    (state: ProofexperienceState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getProofexperienceState,
	(state: ProofexperienceState) => state.isNewEntityButtonEnabled
);

export const selectProofexperience = createSelector(
    getProofexperienceEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectProofexperienceById = (id: string) =>
    createSelector(getProofexperienceEntities, (proofexperienceEntities: Dictionary<ProofexperienceEntity>) => {     
        return proofexperienceEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy ProofexperienceEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
