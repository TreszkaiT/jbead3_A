import { LANGUAGE_FEATURE_KEY, LanguageEntity } from 'src/app/api/domain/language';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as languageActions from './language.actions';

export interface LanguageState extends EntityState<LanguageEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface LanguagePartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [LANGUAGE_FEATURE_KEY]: LanguageState;
}

export const languageAdapter: EntityAdapter<LanguageEntity> =
    createEntityAdapter<LanguageEntity>({
        selectId: (model: LanguageEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: LanguageState = languageAdapter.getInitialState({        // languageAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const languageReducer = createReducer(
    initialState,
    on(languageActions.addLanguage, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(languageActions.addLanguageSuccess, (state, { language }) =>
        languageAdapter.addOne(language, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a languageAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(languageActions.addLanguageFail, (state, { error }) => ({ ...state, error })),
    on(languageActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(languageActions.getLanguage, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(languageActions.getLanguageSuccess, (state, { language }) => {
        if (language) {
            return languageAdapter.upsertOne(language, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(languageActions.getLanguageFail, (state, { error }) => ({ ...state, error })),
    on(languageActions.listLanguages, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(languageActions.listLanguagesSuccess, (state, { languages }) =>
        languageAdapter.upsertMany(languages, { ...state, loading: true })
    ),
    on(languageActions.listLanguagesFail, (state, { error }) => ({ ...state, error })),
    on(languageActions.updateLanguageSuccess, (state, { language }) =>
        languageAdapter.updateOne(language, state)
    ),
    on(languageActions.updateLanguageFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: LanguageState | undefined, action: Action) {
    return languageReducer(state, action);
}
