import { MessageappEntity, MessageappEntityAdd, MessageappEntityUpdate } from './messageapp';

import { FormGroup } from '@angular/forms';

export abstract class MessageappUtilService {
    public abstract createEntity(formGroup: FormGroup): MessageappEntityAdd;
    public abstract createFormGroup(messageapp: MessageappEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): MessageappEntityUpdate;
}
