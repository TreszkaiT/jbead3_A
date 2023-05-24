import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneDataService } from 'src/app/api/domain/phone';
import { PhoneDataServiceImpl } from './service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PhoneDataService,
      useClass: PhoneDataServiceImpl,
    }
  ]
})
export class PhoneDataModule { }
