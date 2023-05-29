import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const PROOFEXPERIENCE_FEATURE_KEY = 'proofexperience';

export interface ProofexperienceModel {
  nameWork: string;
  from: string;
  to: string;
  comment: string;
}

export type ProofexperienceEntity = ProofexperienceModel & Identifiable;

export type ProofexperienceEntityAdd = ProofexperienceModel;

export type ProofexperienceEntityUpdate = Partial<ProofexperienceEntity> & Identifiable;

export type ProofexperienceFormParams = {
    formGroup: FormGroup;

};

export type ProofexperienceTableParams = {
    proofexperiences: ProofexperienceEntity[];
};


