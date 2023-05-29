import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const OTHERSKILL_FEATURE_KEY = 'otherskill';

export interface OtherskillModel {
  name: string;
  level: string;
}

export type OtherskillEntity = OtherskillModel & Identifiable;

export type OtherskillEntityAdd = OtherskillModel;

export type OtherskillEntityUpdate = Partial<OtherskillEntity> & Identifiable;

export type OtherskillFormParams = {
    formGroup: FormGroup;

};

export type OtherskillTableParams = {
    otherskills: OtherskillEntity[];
};


