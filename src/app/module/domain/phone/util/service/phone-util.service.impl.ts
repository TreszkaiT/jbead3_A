import {
    PhoneEntity,
    PhoneEntityAdd,
    PhoneEntityUpdate,
    PhoneUtilService,
} from 'src/app/api/domain/phone';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class PhoneUtilServiceImpl extends PhoneUtilService {
    public _sort = (a: PhoneEntity, b: PhoneEntity): number =>
        a.code < b.code ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): PhoneEntityAdd {
        return {
            code: formGroup.value['code'],
            pnumber: formGroup.value['pnumber'],
        };
    }

    public createFormGroup(phone: PhoneEntity | undefined): FormGroup {
        return this.formBuilder.group({
            pnumber: [phone?.pnumber, Validators.required],
            code: [phone?.code, Validators.required],
            id: [phone?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): PhoneEntityUpdate {
        return {
            code: formGroup.value['code'],
            pnumber: formGroup.value['pnumber'],
            id: formGroup.value['id'],
        };
    }
}
