import { LanguageEntity, LanguageEntityAdd, LanguageEntityUpdate } from './language';

import { FormGroup } from '@angular/forms';

export abstract class LanguageUtilService {
    public abstract createEntity(formGroup: FormGroup): LanguageEntityAdd;
    public abstract createFormGroup(language: LanguageEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): LanguageEntityUpdate;
}
