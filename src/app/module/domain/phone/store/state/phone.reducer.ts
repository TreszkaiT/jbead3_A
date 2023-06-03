import { PHONE_FEATURE_KEY, PhoneEntity } from 'src/app/api/domain/phone';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as phoneActions from './phone.actions';

export interface PhoneState extends EntityState<PhoneEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface PhonePartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [PHONE_FEATURE_KEY]: PhoneState;
}

export const phoneAdapter: EntityAdapter<PhoneEntity> =
    createEntityAdapter<PhoneEntity>({
        selectId: (model: PhoneEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: PhoneState = phoneAdapter.getInitialState({        // phoneAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const phoneReducer = createReducer(
    initialState,
    on(phoneActions.addPhone, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(phoneActions.addPhoneSuccess, (state, { phone }) =>
        phoneAdapter.addOne(phone, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a phoneAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
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
    on(phoneActions.updatePhoneFail, (state, { error }) => ({ ...state, error })),
    on(phoneActions.deletePhone, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(phoneActions.deletePhoneSuccess, (state, { id }) =>
            phoneAdapter.removeOne(id, state)
        ),
    on(phoneActions.deletePhoneFail, (state, { error }) => ({...state, error })),
);

export function reducer(state: PhoneState | undefined, action: Action) {
    return phoneReducer(state, action);
}
