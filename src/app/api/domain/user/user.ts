import { FormGroup } from '@angular/forms';


import { CityEntity } from '../city';
import { Identifiable } from '../../identifiable';
import { PhoneEntity } from '../phone';
import { SocialmediaEntity } from '../socialmedia';
import { PictureEntity } from '../picture';

export const USER_FEATURE_KEY = 'user';

export interface UserModel {
  displayName?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  city?: CityEntity;
  phone?: PhoneEntity;
  socialmedia?: SocialmediaEntity;  
  picture?: PictureEntity
}

export type UserEntity = UserModel & Identifiable;

export type UserEntityAdd = UserModel;

export type UserEntityUpdate = Partial<UserEntity> & Identifiable;

export type UserFormParams = {
  formGroup: FormGroup;
  cities: CityEntity[];                                                   // user-hez egy city hozzáadása
  phones: PhoneEntity[];
  socialmedias: SocialmediaEntity[];
  pictures: PictureEntity[];
};

export type UserTableParams = {
  empty: string[];
  users: UserEntity[];
};
