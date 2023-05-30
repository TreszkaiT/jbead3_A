import { STUDY_FEATURE_KEY, StudyEntity } from 'src/app/api/domain/study';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as studyActions from './study.actions';

export interface StudyState extends EntityState<StudyEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface StudyPartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [STUDY_FEATURE_KEY]: StudyState;
}

export const studyAdapter: EntityAdapter<StudyEntity> =
    createEntityAdapter<StudyEntity>({
        selectId: (model: StudyEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: StudyState = studyAdapter.getInitialState({        // studyAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const studyReducer = createReducer(
    initialState,
    on(studyActions.addStudy, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(studyActions.addStudySuccess, (state, { study }) =>
        studyAdapter.addOne(study, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a studyAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(studyActions.addStudyFail, (state, { error }) => ({ ...state, error })),
    on(studyActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(studyActions.getStudy, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(studyActions.getStudySuccess, (state, { study }) => {
        if (study) {
            return studyAdapter.upsertOne(study, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(studyActions.getStudyFail, (state, { error }) => ({ ...state, error })),
    on(studyActions.listStudys, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(studyActions.listStudysSuccess, (state, { studys }) =>
        studyAdapter.upsertMany(studys, { ...state, loading: true })
    ),
    on(studyActions.listStudysFail, (state, { error }) => ({ ...state, error })),
    on(studyActions.updateStudySuccess, (state, { study }) =>
        studyAdapter.updateOne(study, state)
    ),
    on(studyActions.updateStudyFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: StudyState | undefined, action: Action) {
    return studyReducer(state, action);
}
