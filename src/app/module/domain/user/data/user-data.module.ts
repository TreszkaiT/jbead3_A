import { SharedModule } from 'primeng/api';
import { UserDataService } from 'src/app/api/domain/user';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserDataServiceMock, UserDataServiceImpl} from './services';

@NgModule({
  imports: [CommonModule, SharedModule],
  providers: [
    {
      provide: UserDataService,
      useClass: UserDataServiceImpl,
    },
  ],
})
export class UserDataModule {}
