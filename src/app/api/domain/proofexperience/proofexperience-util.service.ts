import { ProofexperienceEntity, ProofexperienceEntityAdd, ProofexperienceEntityUpdate } from './proofexperience';

import { FormGroup } from '@angular/forms';

export abstract class ProofexperienceUtilService {
    public abstract createEntity(formGroup: FormGroup): ProofexperienceEntityAdd;
    public abstract createFormGroup(proofexperience: ProofexperienceEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): ProofexperienceEntityUpdate;
}
