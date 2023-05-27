import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { SocialmediaModule } from '../socialmedia.module';
import { SocialmediaCollectionModule } from '../collection/socialmedia-collection.module';
import { SocialmediaFormModule } from '../form/socialmedia-form.module';
import { SocialmediaAdminPageRoutingModule } from './socialmedia-admin-page-routing.module';
import { SocialmediaAdminPageComponent } from './page/admin';
import { SocialmediaEditPageComponent, SocialmediaEditPageResolverService } from './page/edit';
import { SocialmediaListPageComponent, SocialmediaListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        SocialmediaAdminPageComponent,
        SocialmediaEditPageComponent,
        SocialmediaListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        SocialmediaAdminPageRoutingModule,
        SocialmediaFormModule,
        SocialmediaCollectionModule,
        SocialmediaModule,
    ],
    providers: [
        SocialmediaEditPageResolverService, 
        SocialmediaListPageResolverService,
    ],
})
export class SocialmediaAdminPageModule {}
