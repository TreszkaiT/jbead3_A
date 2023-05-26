import { PictureEntity, PictureEntityAdd, PictureEntityUpdate } from './picture';

import { FormGroup } from '@angular/forms';

export abstract class PictureUtilService {
    public abstract createEntity(formGroup: FormGroup): PictureEntityAdd;
    public abstract createFormGroup(picture: PictureEntity | undefined): FormGroup;
    public abstract updateEntity(formGroup: FormGroup): PictureEntityUpdate;
}
