import {
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserUtilService,
} from 'src/app/api/domain/user';

import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageappEntity } from 'src/app/api/domain/messageapp';
import { StudyEntity } from 'src/app/api/domain/study';
import { PhoneEntity } from 'src/app/api/domain/phone';

@Injectable()
export class UserUtilServiceImpl extends UserUtilService {
    public _sort = (a: UserEntity, b: UserEntity): number =>
        a.email < b.email ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): UserEntityAdd {      // itt készítek új Entitást
        const messageApps: MessageappEntity[] = formGroup.value['messageApps'] || [];                        // multiselect component miatt
        const studies: StudyEntity[] = formGroup.value['studies'] || []; 
        const phones: PhoneEntity[] = formGroup.value['phones'] || [];

        return {
            lastName: formGroup.value['lastName'],
            email: formGroup.value['email'],
            firstName: (formGroup.value['firstName'] as string).trim(),
            city: formGroup.value['city'], 
            phones: formGroup.value['phones'],
            socialmedia: formGroup.value['socialmedia'],
            picture: formGroup.value['picture'],
            language: formGroup.value['language'],
            messageApps: formGroup.value['messageApps'],
            otherskill: formGroup.value['otherskill'],
            proofexperience: formGroup.value['proofexperience'],
            studies: formGroup.value['studies'],
            messageAppIds: messageApps.map(messageApp => messageApp.id),                                /// multiselect component miatt
            studyIds: studies.map(study => study.id),
            phoneIds: phones.map(phone => phone.id),
        };
    }

    public createFormGroup(user: UserEntity | undefined): FormGroup {   // új FormGroup-ot
        return this.formBuilder.group({
            lastName: [user?.lastName, Validators.required],
            email: [user?.email, Validators.required],
            firstName: [user?.firstName, Validators.required],
            id: [user?.id],
            city: [user?.city],                                          // itt teszem bele a City-t
            phones: [user?.phones],
            socialmedia: [user?.socialmedia],
            picture: [user?.picture],
            language: [user?.language],
            messageApps: [user?.messageApps],
            otherskill: [user?.otherskill],
            proofexperience: [user?.proofexperience],
            studies: [user?.studies],
        });
    }

    public updateEntity(formGroup: FormGroup): UserEntityUpdate {       // és updatelem az Entity-t
        const messageApps: MessageappEntity[] = formGroup.value['messageApps'] || [];                        // multiselect component miatt
        const studies: StudyEntity[] = formGroup.value['studies'] || []; 
        const phones: PhoneEntity[] = formGroup.value['phones'] || [];                              
        let phonesArray: PhoneEntity[]                                                              // hiba: így csak 1 objektumot kapok, mert a HTLM p-dropdown-ban csak egy Obj-ot tudok kiválasztani, és így a kapott output nem egy JSON Arrray lesz [{…}], hanem csak egy sima Objektum: {id: 1, code: 30, pnumber: 1234567}
        phonesArray = [formGroup.value['phones']];                                                  // így itt létrehozok egy Arrayt, és beletszem az objektumot, hogy ezt kapjam: [{…}]  és a backend így már fel tudja dolgozni, mert ő JSON Arrray-t vár: [{…}]
// console.log(phones)
// console.log(phonesArray)
// console.log(messageApps)
// console.log(studies)
        return {
            lastName: formGroup.value['lastName'],
            email: formGroup.value['email'],
            firstName: (formGroup.value['firstName'] as string).trim(),
            id: formGroup.value['id'],
            city: formGroup.value['city'], 
            phones: phonesArray, //formGroup.value['phones'],
            socialmedia: formGroup.value['socialmedia'],
            picture: formGroup.value['picture'],
            language: formGroup.value['language'],
            messageApps: formGroup.value['messageApps'],
            otherskill: formGroup.value['otherskill'],
            proofexperience: formGroup.value['proofexperience'],
            studies: formGroup.value['studies'],
            messageAppIds: messageApps.map(messageApp => messageApp.id),                                /// multiselect component miatt
            studyIds: studies.map(study => study.id),
            //phoneIds: phones.map(phone => phone.id),                                                  // a fenti miatt a phones-ra se lehet map-elni, mert nem egy Array-ban lévő Objektum, hanem csak egy sima Objektum
            phoneIds: phonesArray.map(phone => phone.id),
        };
    }
}
