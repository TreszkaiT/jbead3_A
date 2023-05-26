import { PICTURE_FEATURE_KEY, PictureEntity } from 'src/app/api/domain/picture';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PictureState, pictureAdapter } from './picture.reducer';

export const getPictureState = createFeatureSelector<PictureState>(PICTURE_FEATURE_KEY);

const { selectAll, selectEntities } = pictureAdapter.getSelectors();           // Reducer-ben lévő pictureAdapter segítségével tudok gyorsan selectálni PictureEntity-ket itt letebb

export const getPictureLoading = createSelector(
    getPictureState,
    (state: PictureState) => state.loading
);

export const getPictureError = createSelector(
    getPictureState,
    (state: PictureState) => state.error
);

export const getAllPicture = createSelector(getPictureState, (state: PictureState) =>
    selectAll(state)
);

export const getPictureEntities = createSelector(getPictureState, (state: PictureState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getPictureState,
    (state: PictureState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getPictureState,
	(state: PictureState) => state.isNewEntityButtonEnabled
);

export const selectPicture = createSelector(
    getPictureEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectPictureById = (id: string) =>
    createSelector(getPictureEntities, (pictureEntities: Dictionary<PictureEntity>) => {     
        return pictureEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy PictureEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
