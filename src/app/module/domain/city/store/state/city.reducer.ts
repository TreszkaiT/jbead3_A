import { CITY_FEATURE_KEY, CityEntity } from 'src/app/api/domain/city';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as cityActions from './city.actions';

export interface CityState extends EntityState<CityEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface CityPartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [CITY_FEATURE_KEY]: CityState;
}

export const cityAdapter: EntityAdapter<CityEntity> =
    createEntityAdapter<CityEntity>({
        selectId: (model: CityEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: CityState = cityAdapter.getInitialState({        // cityAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const cityReducer = createReducer(
    initialState,
    on(cityActions.addCity, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.addCitySuccess, (state, { city }) =>
        cityAdapter.addOne(city, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a cityAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(cityActions.addCityFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(cityActions.getCity, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.getCitySuccess, (state, { city }) => {
        if (city) {
            return cityAdapter.upsertOne(city, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(cityActions.getCityFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.listCitys, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(cityActions.listCitysSuccess, (state, { citys }) =>
        cityAdapter.upsertMany(citys, { ...state, loading: true })
    ),
    on(cityActions.listCitysFail, (state, { error }) => ({ ...state, error })),
    on(cityActions.updateCitySuccess, (state, { city }) =>
        cityAdapter.updateOne(city, state)
    ),
    on(cityActions.updateCityFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: CityState | undefined, action: Action) {
    return cityReducer(state, action);
}
