import {
    OtherskillEntity,
    OtherskillEntityAdd,
    OtherskillEntityUpdate,
    OtherskillUtilService,
} from 'src/app/api/domain/otherskill';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class OtherskillUtilServiceImpl extends OtherskillUtilService {
    public _sort = (a: OtherskillEntity, b: OtherskillEntity): number =>
        a.name < b.name ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): OtherskillEntityAdd {

        return {
            name: (formGroup.value['name'] as string).trim(),
            level: formGroup.value['level'],
        };
    }

    public createFormGroup(otherskill: OtherskillEntity | undefined): FormGroup {
        return this.formBuilder.group({
            level: [otherskill?.level, Validators.required],
            name: [otherskill?.name, Validators.required],
            id: [otherskill?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): OtherskillEntityUpdate {

        return {
            name: formGroup.value['name'],
            level: formGroup.value['level'],
            id: formGroup.value['id'],
        };
    }
}
