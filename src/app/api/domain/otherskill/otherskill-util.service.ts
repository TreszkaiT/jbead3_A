import { OtherskillEntity, OtherskillEntityAdd, OtherskillEntityUpdate } from './otherskill';

import { FormGroup } from '@angular/forms';

export abstract class OtherskillUtilService {
    public abstract createEntity(formGroup: FormGroup): OtherskillEntityAdd;
    public abstract createFormGroup(otherskill: OtherskillEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): OtherskillEntityUpdate;
}
