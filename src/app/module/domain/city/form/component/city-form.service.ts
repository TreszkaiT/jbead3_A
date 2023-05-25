import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    CityEntity,
    CityEntityAdd,
    CityEntityUpdate,
    CityFormParams,
    CityStoreService,
    CityUtilService,
} from 'src/app/api/domain/city';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class CityFormService {
    private formGroup!: FormGroup;
    private params!: CityFormParams;
    private params$$: ReplaySubject<CityFormParams>;
    private city!: CityEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private cityStoreService: CityStoreService,
        private cityUtilService: CityUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<CityFormParams> {  // a logika, mely a City-t dropdown menüben betölti a City-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.cityStoreService.selectEntity$(data['cityId']),                    
                ])
            ),
            switchMap(([city]) => {
                this.city = city;
                this.formGroup = this.cityUtilService.createFormGroup(city);
                this.params = this.createCityParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.city) {                        // ha van már ilyen City, akkor
            this.updateCity();                  // updatelem
        } else {
            this.addCity();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addCity(): void {       // a cityUtilService-el készít nekünk egy új Cityt
        const city: CityEntityAdd = this.cityUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.cityStoreService.dispatchAddEntityAction(city);
    }

    private createCityParams(formGroup: FormGroup): CityFormParams {
        const cityFormParams: CityFormParams = {
            formGroup,
        };

        return cityFormParams;
    }

    private updateCity(): void {       // a cityUtilService-el készít nekünk egy létező Cityt, amit majd be tudunk updatelni
        const city: CityEntityUpdate = this.cityUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.cityStoreService.dispatchUpdateEntityAction(city);
    }
}
