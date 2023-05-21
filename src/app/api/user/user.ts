import { FormGroup } from '@angular/forms';

import { Identifiable } from '../identifiable';

export interface UserModel {
    displayName?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}

export type UserEntity = UserModel & Identifiable;

export type UserEntityAdd = UserModel;

export type UserEntityUpdate = Partial<UserEntity> & Identifiable;

export type UserFormParams = {
    FormGroup: FormGroup;
}

export type UserTableParams = { 
    empty: string[];
    users: UserEntity[];
}