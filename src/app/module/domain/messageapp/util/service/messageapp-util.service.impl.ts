import {
    MessageappEntity,
    MessageappEntityAdd,
    MessageappEntityUpdate,
    MessageappUtilService,
} from 'src/app/api/domain/messageapp';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class MessageappUtilServiceImpl extends MessageappUtilService {
    public _sort = (a: MessageappEntity, b: MessageappEntity): number =>
        a.name < b.name ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): MessageappEntityAdd {

        return {
            name: (formGroup.value['name'] as string).trim(),
        };
    }

    public createFormGroup(messageapp: MessageappEntity | undefined): FormGroup {
        return this.formBuilder.group({
            name: [messageapp?.name, Validators.required],
            id: [messageapp?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): MessageappEntityUpdate {

        return {
            name: formGroup.value['name'],
            id: formGroup.value['id'],
        };
    }
}
