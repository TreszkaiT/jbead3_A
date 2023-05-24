
import { PHONE_FEATURE_KEY, PhoneEntity } from 'src/app/api/domain/phone';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { phoneAdapter, PhoneState } from './phone.reducer';

export const getPhoneState = createFeatureSelector<PhoneState>(PHONE_FEATURE_KEY);

const { selectAll, selectEntities } = phoneAdapter.getSelectors();

export const getPhoneLoading = createSelector(
    getPhoneState,
    (state: PhoneState) => state.loading
);

export const getPhoneError = createSelector(
    getPhoneState,
    (state: PhoneState) => state.error
);

export const getAllPhone = createSelector(getPhoneState, (state: PhoneState) =>
    selectAll(state)
);

export const getPhoneEntities = createSelector(getPhoneState, (state: PhoneState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getPhoneState,
    (state: PhoneState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getPhoneState,
	(state: PhoneState) => state.isNewEntityButtonEnabled
);

export const selectPhone = createSelector(
    getPhoneEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectPhoneById = (id: string) =>
    createSelector(getPhoneEntities, (phoneEntities: Dictionary<PhoneEntity>) => {
        return phoneEntities[id];
});


// export const selectPhoneState =
//     createFeatureSelector<PhoneState>(PHONE_FEATURE_KEY);

// export const selectPhone = createSelector(
//     selectPhoneState,
//     (state: PhoneState) => state.phone
// );

// export const selectError = createSelector(
//     selectPhoneState,
//     (state: PhoneState) => state.error
// );
