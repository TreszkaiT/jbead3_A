import { CityEntity, CityEntityAdd, CityEntityUpdate } from 'src/app/api/domain/city';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addCity = createAction(
    '[City Admin] Add City',
    props<{ city: CityEntityAdd }>()
);

export const addCityFail = createAction(
    '[City Admin] Add City Fail',
    props<{ error: string }>()
);

export const addCitySuccess = createAction(
    '[City Admin] Add City Success',
    props<{ city: CityEntity }>()
);

export const getCity = createAction('[City] Get City', props<{ id: string }>());

export const getCitySuccess = createAction(
    '[City] Get City Success',
    props<{ city: CityEntity | null }>()
);

export const getCityFail = createAction(
    '[City] Get City Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[City Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listCitys = createAction('[City Admin] List Citys');

export const listCitysSuccess = createAction(
    '[City Admin] List Citys Success',
    props<{ citys: CityEntity[] }>()
);

export const listCitysFail = createAction(
    '[City Admin] List Citys Fail',
    props<{ error: string }>()
);

export const updateCity = createAction(
    '[City Admin] Update City',
    props<{ city: CityEntityUpdate }>()
);

export const updateCityFail = createAction(
    '[City Admin] Update City Fail',
    props<{ error: string }>()
);

export const updateCitySuccess = createAction(
    '[City Admin] Update City Success',
    props<{ city: Update<CityEntityUpdate> }>()
);

export const deleteCity = createAction(
    '[City Admin] Delete City',
    props<{ id: string }>()
);

export const deleteCityFail = createAction(
    '[City Admin] Delete City Fail',
    props<{ error: string }>()
);

export const deleteCitySuccess = createAction(
    '[City Admin] Delete City Success',
    props<{ id: string }>()
);
