import { OTHERSKILL_FEATURE_KEY, OtherskillEntity } from 'src/app/api/domain/otherskill';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as otherskillActions from './otherskill.actions';

export interface OtherskillState extends EntityState<OtherskillEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface OtherskillPartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [OTHERSKILL_FEATURE_KEY]: OtherskillState;
}

export const otherskillAdapter: EntityAdapter<OtherskillEntity> =
    createEntityAdapter<OtherskillEntity>({
        selectId: (model: OtherskillEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: OtherskillState = otherskillAdapter.getInitialState({        // otherskillAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const otherskillReducer = createReducer(
    initialState,
    on(otherskillActions.addOtherskill, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(otherskillActions.addOtherskillSuccess, (state, { otherskill }) =>
        otherskillAdapter.addOne(otherskill, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a otherskillAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(otherskillActions.addOtherskillFail, (state, { error }) => ({ ...state, error })),
    on(otherskillActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(otherskillActions.getOtherskill, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(otherskillActions.getOtherskillSuccess, (state, { otherskill }) => {
        if (otherskill) {
            return otherskillAdapter.upsertOne(otherskill, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(otherskillActions.getOtherskillFail, (state, { error }) => ({ ...state, error })),
    on(otherskillActions.listOtherskills, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(otherskillActions.listOtherskillsSuccess, (state, { otherskills }) =>
        otherskillAdapter.upsertMany(otherskills, { ...state, loading: true })
    ),
    on(otherskillActions.listOtherskillsFail, (state, { error }) => ({ ...state, error })),
    on(otherskillActions.updateOtherskillSuccess, (state, { otherskill }) =>
        otherskillAdapter.updateOne(otherskill, state)
    ),
    on(otherskillActions.updateOtherskillFail, (state, { error }) => ({ ...state, error })),
    on(otherskillActions.deleteOtherskill, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(otherskillActions.deleteOtherskillSuccess, (state, { id }) =>
            otherskillAdapter.removeOne(id, state)
        ),
    on(otherskillActions.deleteOtherskillFail, (state, { error }) => ({...state, error })),
);

export function reducer(state: OtherskillState | undefined, action: Action) {
    return otherskillReducer(state, action);
}
