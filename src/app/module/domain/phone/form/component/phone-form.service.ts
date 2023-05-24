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

    public init$(): Observable<PhoneFormParams> {
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

    public submit(): void {
        if (this.phone) {
            this.updatePhone();
        } else {
            this.addPhone();
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addPhone(): void {
        const phone: PhoneEntityAdd = this.phoneUtilService.createEntity(
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

    private updatePhone(): void {
        const phone: PhoneEntityUpdate = this.phoneUtilService.updateEntity(
            this.params.formGroup
        );

        this.phoneStoreService.dispatchUpdateEntityAction(phone);
    }
}
