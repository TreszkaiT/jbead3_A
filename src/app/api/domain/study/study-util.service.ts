import { StudyEntity, StudyEntityAdd, StudyEntityUpdate } from './study';

import { FormGroup } from '@angular/forms';

export abstract class StudyUtilService {
    public abstract createEntity(formGroup: FormGroup): StudyEntityAdd;
    public abstract createFormGroup(study: StudyEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): StudyEntityUpdate;
}
