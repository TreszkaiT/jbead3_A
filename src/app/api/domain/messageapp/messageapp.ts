import { FormGroup } from '@angular/forms';

import { Identifiable } from '../../identifiable';

export const MESSAGEAPP_FEATURE_KEY = 'messageapp';

export interface MessageappModel {
  name: string;
}

export type MessageappEntity = MessageappModel & Identifiable;

export type MessageappEntityAdd = MessageappModel;

export type MessageappEntityUpdate = Partial<MessageappEntity> & Identifiable;

export type MessageappFormParams = {
    formGroup: FormGroup;

};

export type MessageappTableParams = {
    messageapps: MessageappEntity[];
};


