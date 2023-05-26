import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { PictureModule } from '../picture.module';
import { PictureCollectionModule } from '../collection/picture-collection.module';
import { PictureFormModule } from '../form/picture-form.module';
import { PictureAdminPageRoutingModule } from './picture-admin-page-routing.module';
import { PictureAdminPageComponent } from './page/admin';
import { PictureEditPageComponent, PictureEditPageResolverService } from './page/edit';
import { PictureListPageComponent, PictureListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        PictureAdminPageComponent,
        PictureEditPageComponent,
        PictureListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PictureAdminPageRoutingModule,
        PictureFormModule,
        PictureCollectionModule,
        PictureModule,
    ],
    providers: [
        PictureEditPageResolverService, 
        PictureListPageResolverService,
    ],
})
export class PictureAdminPageModule {}
