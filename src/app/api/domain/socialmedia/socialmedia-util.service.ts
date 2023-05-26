import { SocialmediaEntity, SocialmediaEntityAdd, SocialmediaEntityUpdate } from './socialmedia';

import { FormGroup } from '@angular/forms';

export abstract class SocialmediaUtilService {
    public abstract createEntity(formGroup: FormGroup): SocialmediaEntityAdd;
    public abstract createFormGroup(socialmedia: SocialmediaEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): SocialmediaEntityUpdate;
}
