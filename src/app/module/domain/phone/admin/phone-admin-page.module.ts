import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { PhoneModule } from '../phone.module';
import { PhoneCollectionModule } from '../collection/phone-collection.module';
import { PhoneFormModule } from '../form/phone-form.module';
import { PhoneAdminPageRoutingModule } from './phone-admin-page-routing.module';
import { PhoneAdminPageComponent } from './page/admin';
import { PhoneEditPageComponent, PhoneEditPageResolverService } from './page/edit';
import { PhoneListPageComponent, PhoneListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        PhoneAdminPageComponent,
        PhoneEditPageComponent,
        PhoneListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PhoneAdminPageRoutingModule,
        PhoneFormModule,
        PhoneCollectionModule,
        PhoneModule,
    ],
    providers: [
        PhoneEditPageResolverService, 
        PhoneListPageResolverService,
    ],
})
export class PhoneAdminPageModule {}
