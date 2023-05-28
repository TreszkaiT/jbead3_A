import {
    LanguageEntity,
    LanguageEntityAdd,
    LanguageEntityUpdate,
    LanguageUtilService,
} from 'src/app/api/domain/language';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LanguageUtilServiceImpl extends LanguageUtilService {
    public _sort = (a: LanguageEntity, b: LanguageEntity): number =>
        a.name < b.name ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): LanguageEntityAdd {

        return {
            name: (formGroup.value['name'] as string).trim(),
            code: formGroup.value['code'],
        };
    }

    public createFormGroup(language: LanguageEntity | undefined): FormGroup {
        return this.formBuilder.group({
            code: [language?.code, Validators.required],
            name: [language?.name, Validators.required],
            id: [language?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): LanguageEntityUpdate {

        return {
            name: formGroup.value['name'],
            code: formGroup.value['code'],
            id: formGroup.value['id'],
        };
    }
}
