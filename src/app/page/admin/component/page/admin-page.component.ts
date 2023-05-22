import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CityStoreService } from 'src/app/api/city';
import { UserStoreService } from 'src/app/api/user';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit{
  constructor(private userStoreService: UserStoreService, private cityStoreService: CityStoreService) {

      //this.userStoreService.dispatchChangeNewEntityButtonEnabled(true);

  }

  ngOnInit(): void {
    this.userStoreService.dispatchListEntitiesAction();
    this.cityStoreService.dispatchListEntitiesAction();
  }
}
