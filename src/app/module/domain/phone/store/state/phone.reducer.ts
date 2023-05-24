
import { PHONE_FEATURE_KEY, PhoneEntity } from 'src/app/api/domain/phone';

import { Action, createReducer, on } from '@ngrx/store';

import * as phoneActions from './phone.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface PhoneState extends EntityState<PhoneEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface PhonePartialState {
    readonly [PHONE_FEATURE_KEY]: PhoneState;
}

export const phoneAdapter: EntityAdapter<PhoneEntity> =
    createEntityAdapter<PhoneEntity>({
        selectId: (model: PhoneEntity) => model.id,
});

export const initialState: PhoneState = phoneAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
});



export const phoneReducer = createReducer(
    initialState,
    on(phoneActions.addPhone, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(phoneActions.addPhoneSuccess, (state, { phone }) =>
        phoneAdapter.addOne(phone, { ...state, loading: true })
    ),
    on(phoneActions.addPhoneFail, (state, { error }) => ({ ...state, error })),
    on(phoneActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(phoneActions.getPhone, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(phoneActions.getPhoneSuccess, (state, { phone }) => {
        if (phone) {
            return phoneAdapter.upsertOne(phone, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(phoneActions.getPhoneFail, (state, { error }) => ({ ...state, error })),
    on(phoneActions.listPhones, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(phoneActions.listPhonesSuccess, (state, { phones }) =>
        phoneAdapter.upsertMany(phones, { ...state, loading: true })
    ),
    on(phoneActions.listPhonesFail, (state, { error }) => ({ ...state, error })),
    on(phoneActions.updatePhoneSuccess, (state, { phone }) =>
        phoneAdapter.updateOne(phone, state)
    ),
    on(phoneActions.updatePhoneFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: PhoneState | undefined, action: Action) {
    return phoneReducer(state, action);
}
