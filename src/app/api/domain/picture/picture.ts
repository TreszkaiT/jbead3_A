import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';
import { v4 as uuidv4 } from 'uuid';

export const PICTURE_FEATURE_KEY = 'picture';

export interface PictureModel {
  name: string;
  type: string;
  uuid?: uuidv4;
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


