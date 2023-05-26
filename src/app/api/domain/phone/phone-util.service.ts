import { FormGroup } from '@angular/forms';

import { PhoneEntity, PhoneEntityAdd, PhoneEntityUpdate } from './phone';

export abstract class PhoneUtilService { 
    public abstract createEntity(formGroup: FormGroup): PhoneEntityAdd;
    public abstract createFormGroup(phone: PhoneEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): PhoneEntityUpdate;
}