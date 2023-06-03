import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    CityEntity,
    CityStoreService,
    CityTableParams,
} from 'src/app/api/domain/city';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class CityTableService {
    private params!: CityTableParams;
    private params$$: ReplaySubject<CityTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private cityStoreService: CityStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editCity(city: CityEntity): void {
        this.router.navigate(['../edit', city?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public deleteCity(city: CityEntity): void {
        this.cityStoreService.dispatchDeleteEntityAction(city.id);
        //this.init$
    }

    public init$(): Observable<CityTableParams> {
        
        // this.cityStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.cityStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((citys) => {
                this.params = {
                    //selectedEntity,
                    citys,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
