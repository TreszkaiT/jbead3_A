import { MESSAGEAPP_FEATURE_KEY, MessageappEntity } from 'src/app/api/domain/messageapp';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MessageappState, messageappAdapter } from './messageapp.reducer';

export const getMessageappState = createFeatureSelector<MessageappState>(MESSAGEAPP_FEATURE_KEY);

const { selectAll, selectEntities } = messageappAdapter.getSelectors();           // Reducer-ben lévő messageappAdapter segítségével tudok gyorsan selectálni MessageappEntity-ket itt letebb

export const getMessageappLoading = createSelector(
    getMessageappState,
    (state: MessageappState) => state.loading
);

export const getMessageappError = createSelector(
    getMessageappState,
    (state: MessageappState) => state.error
);

export const getAllMessageapp = createSelector(getMessageappState, (state: MessageappState) =>
    selectAll(state)
);

export const getMessageappEntities = createSelector(getMessageappState, (state: MessageappState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getMessageappState,
    (state: MessageappState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getMessageappState,
	(state: MessageappState) => state.isNewEntityButtonEnabled
);

export const selectMessageapp = createSelector(
    getMessageappEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectMessageappById = (id: string) =>
    createSelector(getMessageappEntities, (messageappEntities: Dictionary<MessageappEntity>) => {     
        return messageappEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy MessageappEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
