import {
    PictureEntity,
    PictureEntityAdd,
    PictureEntityUpdate,
    PictureUtilService,
} from 'src/app/api/domain/picture';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class PictureUtilServiceImpl extends PictureUtilService {
    public _sort = (a: PictureEntity, b: PictureEntity): number =>
        a.name < b.name ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): PictureEntityAdd {

        return {
            name: (formGroup.value['name'] as string).trim(),
            type: formGroup.value['type'],
            // uuid: formGroup.value['uuid'],
        };
    }

    public createFormGroup(picture: PictureEntity | undefined): FormGroup {
        return this.formBuilder.group({
            type: [picture?.type, Validators.required],
            name: [picture?.name, Validators.required],
            // uuid: [picture?.uuid, Validators.required],
            id: [picture?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): PictureEntityUpdate {

        return {
            name: formGroup.value['name'],
            type: formGroup.value['type'],
            // uuid: formGroup.value['uuid'],
            id: formGroup.value['id'],
        };
    }
}
