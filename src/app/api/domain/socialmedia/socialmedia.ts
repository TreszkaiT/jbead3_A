import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const SOCIALMEDIA_FEATURE_KEY = 'socialmedia';

export interface SocialmediaModel {
  name: string;
}

export type SocialmediaEntity = SocialmediaModel & Identifiable;

export type SocialmediaEntityAdd = SocialmediaModel;

export type SocialmediaEntityUpdate = Partial<SocialmediaEntity> & Identifiable;

export type SocialmediaFormParams = {
    formGroup: FormGroup;

};

export type SocialmediaTableParams = {
    socialmedias: SocialmediaEntity[];
};


