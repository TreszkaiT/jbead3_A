import {
    SocialmediaEntity,
    SocialmediaEntityAdd,
    SocialmediaEntityUpdate,
    SocialmediaUtilService,
} from 'src/app/api/domain/socialmedia';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SocialmediaUtilServiceImpl extends SocialmediaUtilService {
    public _sort = (a: SocialmediaEntity, b: SocialmediaEntity): number =>
        a.name < b.name ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): SocialmediaEntityAdd {

        return {
            name: (formGroup.value['name'] as string).trim(),
        };
    }

    public createFormGroup(socialmedia: SocialmediaEntity | undefined): FormGroup {
        return this.formBuilder.group({
            name: [socialmedia?.name, Validators.required],
            id: [socialmedia?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): SocialmediaEntityUpdate {

        return {
            name: formGroup.value['name'],
            id: formGroup.value['id'],
        };
    }
}
