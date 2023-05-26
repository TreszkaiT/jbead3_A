import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const PICTURE_FEATURE_KEY = 'picture';

export interface PictureModel {
  name: string;
  type: string;
  // uuid: string;
}

export type PictureEntity = PictureModel & Identifiable;

export type PictureEntityAdd = PictureModel;

export type PictureEntityUpdate = Partial<PictureEntity> & Identifiable;

export type PictureFormParams = {
    formGroup: FormGroup;

};

export type PictureTableParams = {
    pictures: PictureEntity[];
};


