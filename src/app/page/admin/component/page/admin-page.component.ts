import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { CityStoreService } from 'src/app/api/domain/city';
// import { LanguageStoreService } from 'src/app/api/domain/language';
// import { PhoneStoreService } from 'src/app/api/domain/phone';
// import { PictureStoreService } from 'src/app/api/domain/picture';
// import { SocialmediaStoreService } from 'src/app/api/domain/socialmedia';
// import { UserStoreService } from 'src/app/api/domain/user';
import { AdminListsPageResolverService } from '../list/admin-lists-page-resolver.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit{
  constructor(
    // private userStoreService: UserStoreService, 
    // private cityStoreService: CityStoreService,
    // // private languageStoreService: LanguageStoreService,
    // private phoneStoreService: PhoneStoreService,
    // private pictureStoreService: PictureStoreService,
    // private socialmedaiStoreService: SocialmediaStoreService,
    private adminListsPageResolverService: AdminListsPageResolverService
  ) {

      //this.userStoreService.dispatchChangeNewEntityButtonEnabled(true);

  }

  ngOnInit(): void {
    // this.userStoreService.dispatchListEntitiesAction();               // e miatt töltődik be egyből az admin táblában a listába a Serverről az adat már induláskor
    // this.cityStoreService.dispatchListEntitiesAction();
    // // this.languageStoreService.dispatchListEntitiesAction();
    // this.phoneStoreService.dispatchListEntitiesAction();
    // this.pictureStoreService.dispatchListEntitiesAction();
    // this.socialmedaiStoreService.dispatchListEntitiesAction();
    this.adminListsPageResolverService.resolve();                       // de így is lehet
  }
}
