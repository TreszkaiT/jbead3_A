import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserFormParams,
    UserStoreService,
    UserUtilService,
} from 'src/app/api/domain/user';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CityEntity, CityStoreService } from 'src/app/api/domain/city';
import { PhoneEntity, PhoneStoreService } from 'src/app/api/domain/phone';
import { compileDeclareClassMetadata } from '@angular/compiler';
import { SocialmediaEntity, SocialmediaStoreService } from 'src/app/api/domain/socialmedia';
import { PictureEntity, PictureStoreService } from 'src/app/api/domain/picture';
import { LanguageEntity, LanguageStoreService } from 'src/app/api/domain/language';
import { MessageappStoreService } from '../../../../../api/domain/messageapp/messageapp-store.service';
import { MessageappEntity } from 'src/app/api/domain/messageapp';
import { OtherskillEntity, OtherskillStoreService } from 'src/app/api/domain/otherskill';
import { ProofexperienceEntity, ProofexperienceStoreService } from 'src/app/api/domain/proofexperience';
import { StudyEntity, StudyStoreService } from 'src/app/api/domain/study';

@Injectable()
export class UserFormService {
    private formGroup!: FormGroup;
    private params!: UserFormParams;
    private params$$: ReplaySubject<UserFormParams>;
    private user!: UserEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,        
        private userStoreService: UserStoreService,
        private userUtilService: UserUtilService,
        private cityStoreService: CityStoreService,
        private phoneStoreService: PhoneStoreService,
        private socialmediaStoreService: SocialmediaStoreService,
        private pictureStoreService: PictureStoreService,
        private languageStoreService: LanguageStoreService,
        private messageappStoreService: MessageappStoreService,
        private otherskillStoreService: OtherskillStoreService,
        private proofexperienceStoreService: ProofexperienceStoreService,
        private studyStoreService: StudyStoreService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<UserFormParams> {  // a logika, mely a City-t dropdown menüben betölti a User-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.userStoreService.selectEntity$(data['userId']),
                    this.cityStoreService.selectEntityList$(),
                    this.phoneStoreService.selectEntityList$(),
                    this.socialmediaStoreService.selectEntityList$(), 
                    this.pictureStoreService.selectEntityList$(),
                    this.languageStoreService.selectEntityList$(),
                    this.messageappStoreService.selectEntityList$(),
                    this.otherskillStoreService.selectEntityList$(),
                    this.proofexperienceStoreService.selectEntityList$(),
                    this.studyStoreService.selectEntityList$(),
                ])
            ),
            switchMap(([user, cities, phones, socialMedias, pictures, languages, messageApps, otherSkills, proofexperiences, studies]) => {
                this.user = user;
                this.formGroup = this.userUtilService.createFormGroup(user);
                this.params = this.createUserParams(this.formGroup, cities, phones, socialMedias, pictures, languages, messageApps, otherSkills, proofexperiences, studies);
// console.log(this.params);
                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.user) {                        // ha van már ilyen User, akkor
            this.updateUser();                  // updatelem
        } else {
            this.addUser();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addUser(): void {       // a userUtilService-el készít nekünk egy új Usert
        const user: UserEntityAdd = this.userUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );
//console.log('user'+user);
        this.userStoreService.dispatchAddEntityAction(user);
    }

    private createUserParams(formGroup: FormGroup, cities: CityEntity[], phones: PhoneEntity[], socialMedias: SocialmediaEntity[], pictures: PictureEntity[], languages: LanguageEntity[], messageApps: MessageappEntity[], otherSkills: OtherskillEntity[], proofexperiences: ProofexperienceEntity[], studies: StudyEntity[]): UserFormParams {
        const userFormParams: UserFormParams = {
            formGroup,
            cities,
            phones,
            socialMedias,
            pictures,
            languages,
            messageApps,
            otherSkills,
            proofexperiences,
            studies,
        };

        return userFormParams;
    }

    private updateUser(): void {       // a userUtilService-el készít nekünk egy létező Usert, amit majd be tudunk updatelni
        const user: UserEntityUpdate = this.userUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.userStoreService.dispatchUpdateEntityAction(user);
    }
}
