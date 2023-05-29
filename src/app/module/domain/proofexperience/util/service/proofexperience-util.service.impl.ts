import {
    ProofexperienceEntity,
    ProofexperienceEntityAdd,
    ProofexperienceEntityUpdate,
    ProofexperienceUtilService,
} from 'src/app/api/domain/proofexperience';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class ProofexperienceUtilServiceImpl extends ProofexperienceUtilService {
    public _sort = (a: ProofexperienceEntity, b: ProofexperienceEntity): number =>
        a.nameWork < b.nameWork ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): ProofexperienceEntityAdd {

        return {
            nameWork: (formGroup.value['nameWork'] as string).trim(),
            from: formGroup.value['from'],
            to: formGroup.value['to'],
            comment: formGroup.value['comment'],
        };
    }

    public createFormGroup(proofexperience: ProofexperienceEntity | undefined): FormGroup {
        return this.formBuilder.group({
            from: [proofexperience?.from, Validators.required],
            nameWork: [proofexperience?.nameWork, Validators.required],
            to: [proofexperience?.to, Validators.required],
            comment: [proofexperience?.comment, Validators.required],
            id: [proofexperience?.id],
        });
    }

    public updateEntity(formGroup: FormGroup): ProofexperienceEntityUpdate {

        return {
            nameWork: formGroup.value['nameWork'],
            from: formGroup.value['from'],
            to: formGroup.value['to'],
            comment: formGroup.value['comment'],
            id: formGroup.value['id'],
        };
    }
}
