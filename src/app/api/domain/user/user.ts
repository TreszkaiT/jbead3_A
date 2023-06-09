import { FormGroup } from '@angular/forms';


import { CityEntity } from '../city';
import { Identifiable } from '../../identifiable';
import { PhoneEntity } from '../phone';
import { SocialmediaEntity } from '../socialmedia';
import { PictureEntity } from '../picture';
import { LanguageEntity } from '../language';
import { MessageappEntity } from '../messageapp';
import { OtherskillEntity } from '../otherskill';
import { ProofexperienceEntity } from '../proofexperience';
import { StudyEntity } from '../study';

export const USER_FEATURE_KEY = 'user';

export interface UserModel {
  displayName?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  // other Entities
  city?: CityEntity[];
  phones?: PhoneEntity[];
  socialMedias?: SocialmediaEntity[];
  picture?: PictureEntity[];
  languages?: LanguageEntity[];
  messageApps?: MessageappEntity[];
  otherSkills?: OtherskillEntity[];
  proofExperiences?: ProofexperienceEntity[];
  studies?: StudyEntity[];
  // for Multiselect components
  messageAppIds: string[];
  studyIds: string[];
  phoneIds: string[];
}

export type UserEntity = UserModel & Identifiable;

export type UserEntityAdd = UserModel;

export type UserEntityUpdate = Partial<UserEntity> & Identifiable;

export type UserFormParams = {
  formGroup: FormGroup;
  cities: CityEntity[];                                                   // user-hez egy city hozzáadása
  phones: PhoneEntity[];
  socialMedias: SocialmediaEntity[];
  pictures: PictureEntity[];
  languages: LanguageEntity[];
  messageApps: MessageappEntity[]; 
  otherSkills: OtherskillEntity[];
  proofExperiences: ProofexperienceEntity[];
  studies: StudyEntity[];
};

export type UserTableParams = {
  empty: string[];
  users: UserEntity[];
};
