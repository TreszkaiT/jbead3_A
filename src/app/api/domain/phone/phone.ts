import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const PHONE_FEATURE_KEY = "phone";

export interface PhoneModel {
    code: string;
    pnumber: string;
}

export type PhoneEntity = PhoneModel & Identifiable;

export type PhoneEntityAdd = PhoneModel;

export type PhoneEntityUpdate = Partial<PhoneEntity> & Identifiable;

export type PhoneFormParams = {
    formGroup: FormGroup;
}

export type PhoneTableParams = {
    phones: PhoneEntity[];
}