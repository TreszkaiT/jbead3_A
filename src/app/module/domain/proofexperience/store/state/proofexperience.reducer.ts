import { PROOFEXPERIENCE_FEATURE_KEY, ProofexperienceEntity } from 'src/app/api/domain/proofexperience';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as proofexperienceActions from './proofexperience.actions';

export interface ProofexperienceState extends EntityState<ProofexperienceEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface ProofexperiencePartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [PROOFEXPERIENCE_FEATURE_KEY]: ProofexperienceState;
}

export const proofexperienceAdapter: EntityAdapter<ProofexperienceEntity> =
    createEntityAdapter<ProofexperienceEntity>({
        selectId: (model: ProofexperienceEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: ProofexperienceState = proofexperienceAdapter.getInitialState({        // proofexperienceAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const proofexperienceReducer = createReducer(
    initialState,
    on(proofexperienceActions.addProofexperience, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(proofexperienceActions.addProofexperienceSuccess, (state, { proofexperience }) =>
        proofexperienceAdapter.addOne(proofexperience, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a proofexperienceAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(proofexperienceActions.addProofexperienceFail, (state, { error }) => ({ ...state, error })),
    on(proofexperienceActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(proofexperienceActions.getProofexperience, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(proofexperienceActions.getProofexperienceSuccess, (state, { proofexperience }) => {
        if (proofexperience) {
            return proofexperienceAdapter.upsertOne(proofexperience, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(proofexperienceActions.getProofexperienceFail, (state, { error }) => ({ ...state, error })),
    on(proofexperienceActions.listProofexperiences, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(proofexperienceActions.listProofexperiencesSuccess, (state, { proofexperiences }) =>
        proofexperienceAdapter.upsertMany(proofexperiences, { ...state, loading: true })
    ),
    on(proofexperienceActions.listProofexperiencesFail, (state, { error }) => ({ ...state, error })),
    on(proofexperienceActions.updateProofexperienceSuccess, (state, { proofexperience }) =>
        proofexperienceAdapter.updateOne(proofexperience, state)
    ),
    on(proofexperienceActions.updateProofexperienceFail, (state, { error }) => ({ ...state, error })),
    on(proofexperienceActions.deleteProofexperience, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(proofexperienceActions.deleteProofexperienceSuccess, (state, { id }) =>
            proofexperienceAdapter.removeOne(id, state)
        ),
    on(proofexperienceActions.deleteProofexperienceFail, (state, { error }) => ({...state, error })),
);

export function reducer(state: ProofexperienceState | undefined, action: Action) {
    return proofexperienceReducer(state, action);
}
