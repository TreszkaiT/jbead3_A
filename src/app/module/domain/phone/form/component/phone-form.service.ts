import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    PhoneEntity,
    PhoneEntityAdd,
    PhoneEntityUpdate,
    PhoneFormParams,
    PhoneStoreService,
    PhoneUtilService,
} from 'src/app/api/domain/phone';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class PhoneFormService {
    private formGroup!: FormGroup;
    private params!: PhoneFormParams;
    private params$$: ReplaySubject<PhoneFormParams>;
    private phone!: PhoneEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private phoneStoreService: PhoneStoreService,
        private phoneUtilService: PhoneUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<PhoneFormParams> {  // a logika, mely a Phone-t dropdown menüben betölti a Phone-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.phoneStoreService.selectEntity$(data['phoneId']),                    
                ])
            ),
            switchMap(([phone]) => {
                this.phone = phone;
                this.formGroup = this.phoneUtilService.createFormGroup(phone);
                this.params = this.createPhoneParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.phone) {                        // ha van már ilyen Phone, akkor
            this.updatePhone();                  // updatelem
        } else {
            this.addPhone();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addPhone(): void {       // a phoneUtilService-el készít nekünk egy új Phonet
        const phone: PhoneEntityAdd = this.phoneUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.phoneStoreService.dispatchAddEntityAction(phone);
    }

    private createPhoneParams(formGroup: FormGroup): PhoneFormParams {
        const phoneFormParams: PhoneFormParams = {
            formGroup,
        };

        return phoneFormParams;
    }

    private updatePhone(): void {       // a phoneUtilService-el készít nekünk egy létező Phonet, amit majd be tudunk updatelni
        const phone: PhoneEntityUpdate = this.phoneUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.phoneStoreService.dispatchUpdateEntityAction(phone);
    }
}
