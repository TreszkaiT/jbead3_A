import { SOCIALMEDIA_FEATURE_KEY, SocialmediaEntity } from 'src/app/api/domain/socialmedia';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as socialmediaActions from './socialmedia.actions';

export interface SocialmediaState extends EntityState<SocialmediaEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface SocialmediaPartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [SOCIALMEDIA_FEATURE_KEY]: SocialmediaState;
}

export const socialmediaAdapter: EntityAdapter<SocialmediaEntity> =
    createEntityAdapter<SocialmediaEntity>({
        selectId: (model: SocialmediaEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: SocialmediaState = socialmediaAdapter.getInitialState({        // socialmediaAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const socialmediaReducer = createReducer(
    initialState,
    on(socialmediaActions.addSocialmedia, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(socialmediaActions.addSocialmediaSuccess, (state, { socialmedia }) =>
        socialmediaAdapter.addOne(socialmedia, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a socialmediaAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(socialmediaActions.addSocialmediaFail, (state, { error }) => ({ ...state, error })),
    on(socialmediaActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(socialmediaActions.getSocialmedia, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(socialmediaActions.getSocialmediaSuccess, (state, { socialmedia }) => {
        if (socialmedia) {
            return socialmediaAdapter.upsertOne(socialmedia, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(socialmediaActions.getSocialmediaFail, (state, { error }) => ({ ...state, error })),
    on(socialmediaActions.listSocialmedias, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(socialmediaActions.listSocialmediasSuccess, (state, { socialmedias }) =>
        socialmediaAdapter.upsertMany(socialmedias, { ...state, loading: true })
    ),
    on(socialmediaActions.listSocialmediasFail, (state, { error }) => ({ ...state, error })),
    on(socialmediaActions.updateSocialmediaSuccess, (state, { socialmedia }) =>
        socialmediaAdapter.updateOne(socialmedia, state)
    ),
    on(socialmediaActions.updateSocialmediaFail, (state, { error }) => ({ ...state, error })),
    on(socialmediaActions.deleteSocialmedia, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(socialmediaActions.deleteSocialmediaSuccess, (state, { id }) =>
            socialmediaAdapter.removeOne(id, state)
        ),
    on(socialmediaActions.deleteSocialmediaFail, (state, { error }) => ({...state, error })),
);

export function reducer(state: SocialmediaState | undefined, action: Action) {
    return socialmediaReducer(state, action);
}
