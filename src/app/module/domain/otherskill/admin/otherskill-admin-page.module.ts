import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { OtherskillModule } from '../otherskill.module';
import { OtherskillCollectionModule } from '../collection/otherskill-collection.module';
import { OtherskillFormModule } from '../form/otherskill-form.module';
import { OtherskillAdminPageRoutingModule } from './otherskill-admin-page-routing.module';
import { OtherskillAdminPageComponent } from './page/admin';
import { OtherskillEditPageComponent, OtherskillEditPageResolverService } from './page/edit';
import { OtherskillListPageComponent, OtherskillListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        OtherskillAdminPageComponent,
        OtherskillEditPageComponent,
        OtherskillListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        OtherskillAdminPageRoutingModule,
        OtherskillFormModule,
        OtherskillCollectionModule,
        OtherskillModule,
    ],
    providers: [
        OtherskillEditPageResolverService, 
        OtherskillListPageResolverService,
    ],
})
export class OtherskillAdminPageModule {}
