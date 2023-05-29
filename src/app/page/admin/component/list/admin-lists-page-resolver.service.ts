import { CityStoreService } from 'src/app/api/domain/city';
import { UserStoreService } from 'src/app/api/domain/user';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LanguageStoreService } from 'src/app/api/domain/language';
import { PhoneStoreService } from '../../../../api/domain/phone/phone-store.service';
import { PictureStoreService } from 'src/app/api/domain/picture';
import { SocialmediaStoreService } from 'src/app/api/domain/socialmedia';
import { MessageappStoreService } from '../../../../api/domain/messageapp/messageapp-store.service';

@Injectable()
export class AdminListsPageResolverService implements Resolve<void> {               // azért, hogy az admin oldalban a City és a User, stb. Entitások táblázatában már előre kiolvassa a listát az Angular Framework
    constructor(
        private userStoreService: UserStoreService, 
        private cityStoreService: CityStoreService,
        private phoneStoreService: PhoneStoreService,
        private pictureStoreService: PictureStoreService,
        private socialmedaiStoreService: SocialmediaStoreService,
        private languageStoreService: LanguageStoreService,
        private messageappStoreService: MessageappStoreService
        ) {}

    public resolve(): void {
        //this.userStoreService.dispatchChangeNewEntityButtonEnabled(true);
        this.userStoreService.dispatchListEntitiesAction();
        this.cityStoreService.dispatchListEntitiesAction();        
        this.phoneStoreService.dispatchListEntitiesAction();
        this.pictureStoreService.dispatchListEntitiesAction();
        this.socialmedaiStoreService.dispatchListEntitiesAction();
        this.languageStoreService.dispatchListEntitiesAction();
        this.messageappStoreService.dispatchListEntitiesAction();
    }
}
