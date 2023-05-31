import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserStoreService } from 'src/app/api/domain/user';

import { LanguageStoreService } from 'src/app/api/domain/language';
import { PictureStoreService } from 'src/app/api/domain/picture';
import { SocialmediaStoreService } from 'src/app/api/domain/socialmedia';
import { OtherskillStoreService } from 'src/app/api/domain/otherskill';
import { ProofexperienceStoreService } from 'src/app/api/domain/proofexperience';
import { StudyStoreService } from 'src/app/api/domain/study';
import { CityStoreService } from 'src/app/api/domain/city';
import { PhoneStoreService } from 'src/app/api/domain/phone';
import { MessageappStoreService } from 'src/app/api/domain/messageapp';

@Injectable()
export class UserEditPageResolverService implements Resolve<void> {
	public constructor(
		private userStoreService: UserStoreService,
		private cityStoreService: CityStoreService,
        private phoneStoreService: PhoneStoreService,
        private pictureStoreService: PictureStoreService,
        private socialmedaiStoreService: SocialmediaStoreService,
        private languageStoreService: LanguageStoreService,
        private messageappStoreService: MessageappStoreService,
        private otherskillStoreService: OtherskillStoreService,
        private proofexperienceStoreService: ProofexperienceStoreService,
        private studyStoreService: StudyStoreService,
		) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.userStoreService.dispatchChangeNewEntityButtonEnabled(false);
		this.cityStoreService.dispatchListEntitiesAction();        
        this.phoneStoreService.dispatchListEntitiesAction();
        this.pictureStoreService.dispatchListEntitiesAction();
        this.socialmedaiStoreService.dispatchListEntitiesAction();
        this.languageStoreService.dispatchListEntitiesAction();
        this.messageappStoreService.dispatchListEntitiesAction();
        this.otherskillStoreService.dispatchListEntitiesAction();
        this.proofexperienceStoreService.dispatchListEntitiesAction();
        this.studyStoreService.dispatchListEntitiesAction();
	}
}
