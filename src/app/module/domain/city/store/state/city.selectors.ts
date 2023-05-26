import { CITY_FEATURE_KEY, CityEntity } from 'src/app/api/domain/city';

import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CityState, cityAdapter } from './city.reducer';

export const getCityState = createFeatureSelector<CityState>(CITY_FEATURE_KEY);

const { selectAll, selectEntities } = cityAdapter.getSelectors();           // Reducer-ben lévő cityAdapter segítségével tudok gyorsan selectálni CityEntity-ket itt letebb

export const getCityLoading = createSelector(
    getCityState,
    (state: CityState) => state.loading
);

export const getCityError = createSelector(
    getCityState,
    (state: CityState) => state.error
);

export const getAllCity = createSelector(getCityState, (state: CityState) =>
    selectAll(state)
);

export const getCityEntities = createSelector(getCityState, (state: CityState) =>
    selectEntities(state)
);

export const getSelectedId = createSelector(
    getCityState,
    (state: CityState) => state.selectedId || ''
);

export const isNewEntityButtonEnabled = createSelector(
	getCityState,
	(state: CityState) => state.isNewEntityButtonEnabled
);

export const selectCity = createSelector(
    getCityEntities,
    getSelectedId,
    (entities, selectedId) => entities[selectedId]
);

export const selectCityById = (id: string) =>
    createSelector(getCityEntities, (cityEntities: Dictionary<CityEntity>) => {     
        return cityEntities[id];                                                    // a Dictionary-val lehet elérni, hogy itt id alapján adjon vissza egy CityEntity-t (Map-pinget így tudom egy kéréssel gyorsan átnézni)
    });
