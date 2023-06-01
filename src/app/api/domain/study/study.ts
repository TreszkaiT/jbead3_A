import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const STUDY_FEATURE_KEY = 'study';

export interface StudyModel {
  nameSchool: string;
  from: string;             // Moment
  to: string;               // Moment
  comment: string;
  level: number;
}

export type StudyEntity = StudyModel & Identifiable;

export type StudyEntityAdd = StudyModel;

export type StudyEntityUpdate = Partial<StudyEntity> & Identifiable;

export type StudyFormParams = {
    formGroup: FormGroup;

};

export type StudyTableParams = {
    studys: StudyEntity[];
};


