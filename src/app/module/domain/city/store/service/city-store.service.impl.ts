import { Observable } from 'rxjs';
import {
    CityEntity,
    CityEntityAdd,
    CityEntityUpdate,
    CityStoreService,
} from 'src/app/api/domain/city';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as cityActions from '../state/city.actions';
import * as fromCity from '../state/city.reducer';
import * as CitySelectors from '../state/city.selectors';

@Injectable()
export class CityStoreServiceImpl extends CityStoreService {
    public constructor(private store: Store<fromCity.CityPartialState>) {   // ezt a store: -t egy ilyen CityPartialState interface alapján szeretném használni
        super();
    }

    public dispatchAddEntityAction(city: CityEntityAdd): void {
        this.store.dispatch(cityActions.addCity({ city }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
		this.store.dispatch(
			cityActions.changeNewEntityButtonEnabled({ enabled })
		);
	} 

    public override dispatchGetEntityAction(id: string): void {
        this.store.dispatch(cityActions.getCity({ id }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(cityActions.listCitys());
    }

    public dispatchUpdateEntityAction(city: CityEntityUpdate): void {
        this.store.dispatch(cityActions.updateCity({ city }));
    }

    public dispatchDeleteEntityAction(id: string): void {
        this.store.dispatch(cityActions.deleteCity({ id }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(CitySelectors.getCityLoading));
    }

    public override selectEntity$(
        id: string
    ): Observable<CityEntity | undefined> {
        return this.store.pipe(select(CitySelectors.selectCityById(id)));
    }

    public selectEntityList$(): Observable<CityEntity[]> {
        return this.store.pipe(select(CitySelectors.getAllCity));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
		return this.store.pipe(
			select(CitySelectors.isNewEntityButtonEnabled)
		);
	} 
}
