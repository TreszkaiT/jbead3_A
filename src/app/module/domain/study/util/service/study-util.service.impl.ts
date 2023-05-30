import {
    StudyEntity,
    StudyEntityAdd,
    StudyEntityUpdate,
    StudyUtilService,
} from 'src/app/api/domain/study';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class StudyUtilServiceImpl extends StudyUtilService {
    public _sort = (a: StudyEntity, b: StudyEntity): number =>
        a.nameSchool < b.nameSchool ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): StudyEntityAdd {

        return {
            nameSchool: (formGroup.value['nameSchool'] as string).trim(),
            from: formGroup.value['from'],
            to: formGroup.value['to'],
            comment: formGroup.value['comment'],
            level: formGroup.value['level'],
        };
    }

    public createFormGroup(study: StudyEntity | undefined): FormGroup {
        return this.formBuilder.group({
            from: [study?.from, Validators.required],
            nameSchool: [study?.nameSchool, Validators.required],
            to: [study?.to, Validators.required],
            comment: [study?.comment, Validators.required],
            level: [study?.level, Validators.required],
            id: [study?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): StudyEntityUpdate {

        return {
            nameSchool: formGroup.value['nameSchool'],
            from: formGroup.value['from'],
            to: formGroup.value['to'],
            comment: formGroup.value['comment'],
            level: formGroup.value['level'],
            id: formGroup.value['id'],
        };
    }
}
