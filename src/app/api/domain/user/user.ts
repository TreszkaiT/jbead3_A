import { FormGroup } from '@angular/forms';


import { CityEntity } from '../city';
import { Identifiable } from '../../identifiable';

export const USER_FEATURE_KEY = 'user';

export interface UserModel {
  city?: CityEntity;
  displayName?: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export type UserEntity = UserModel & Identifiable;

export type UserEntityAdd = UserModel;

export type UserEntityUpdate = Partial<UserEntity> & Identifiable;

export type UserFormParams = {
  formGroup: FormGroup;
  cities: CityEntity[];                                                   // user-hez egy city hozzáadása
};

export type UserTableParams = {
  empty: string[];
  users: UserEntity[];
};
