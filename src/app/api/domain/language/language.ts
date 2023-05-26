import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const LANGUAGE_FEATURE_KEY = 'language';

export interface LanguageModel {
  name: string;
  code: string;
}

export type LanguageEntity = LanguageModel & Identifiable;

export type LanguageEntityAdd = LanguageModel;

export type LanguageEntityUpdate = Partial<LanguageEntity> & Identifiable;

export type LanguageFormParams = {
    formGroup: FormGroup;

};

export type LanguageTableParams = {
    languages: LanguageEntity[];
};


