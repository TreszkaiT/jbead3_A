import {
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserUtilService,
} from 'src/app/api/domain/user';

import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageappEntity } from 'src/app/api/domain/messageapp';

@Injectable()
export class UserUtilServiceImpl extends UserUtilService {
    public _sort = (a: UserEntity, b: UserEntity): number =>
        a.email < b.email ? 1 : -1;

    public constructor(private formBuilder: FormBuilder) {
        super();
    }

    public createEntity(formGroup: FormGroup): UserEntityAdd {      // itt készítek új Entitást
        const messageapps: MessageappEntity[] = formGroup.value['messageapps'] || [];                        // multiselect component miatt

        return {
            lastName: formGroup.value['lastName'],
            email: formGroup.value['email'],
            firstName: (formGroup.value['firstName'] as string).trim(),
            city: formGroup.value['city'], 
            phone: formGroup.value['phone'],
            socialmedia: formGroup.value['socialmedia'],
            picture: formGroup.value['picture'],
            language: formGroup.value['language'],
            messageapps: formGroup.value['messageapps'],
            otherskill: formGroup.value['otherskill'],
            proofexperience: formGroup.value['proofexperience'],
            study: formGroup.value['study'],
            messageappIds: messageapps.map(messageapp => messageapp.id),                                /// multiselect component miatt
        };
    }

    public createFormGroup(user: UserEntity | undefined): FormGroup {   // új FormGroup-ot
        return this.formBuilder.group({
            lastName: [user?.lastName, Validators.required],
            email: [user?.email, Validators.required],
            firstName: [user?.firstName, Validators.required],
            id: [user?.id],
            city: [user?.city],                                          // itt teszem bele a City-t
            phone: [user?.phone],
            socialmedia: [user?.socialmedia],
            picture: [user?.picture],
            language: [user?.language],
            messageapps: [user?.messageapps],
            otherskill: [user?.otherskill],
            proofexperience: [user?.proofexperience],
            study: [user?.study],
            // messageapps: [user?.messageapp],
            // selectedMessageApps: new FormControl<MessageappEntity[] | null>(null)
        });
    }

    public updateEntity(formGroup: FormGroup): UserEntityUpdate {       // és updatelem az Entity-t
        const messageapps: MessageappEntity[] = formGroup.value['messageapps'] || [];                        // multiselect component miatt

        return {
            lastName: formGroup.value['lastName'],
            email: formGroup.value['email'],
            firstName: (formGroup.value['firstName'] as string).trim(),
            id: formGroup.value['id'],
            city: formGroup.value['city'], 
            phone: formGroup.value['phone'],
            socialmedia: formGroup.value['socialmedia'],
            picture: formGroup.value['picture'],
            language: formGroup.value['language'],
            messageapps: formGroup.value['messageapps'],
            otherskill: formGroup.value['otherskill'],
            proofexperience: formGroup.value['proofexperience'],
            study: formGroup.value['study'],
            messageappIds: messageapps.map(messageapp => messageapp.id),                                /// multiselect component miatt
        };
    }
}
