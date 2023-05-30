import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { StudyModule } from '../study.module';
import { StudyCollectionModule } from '../collection/study-collection.module';
import { StudyFormModule } from '../form/study-form.module';
import { StudyAdminPageRoutingModule } from './study-admin-page-routing.module';
import { StudyAdminPageComponent } from './page/admin';
import { StudyEditPageComponent, StudyEditPageResolverService } from './page/edit';
import { StudyListPageComponent, StudyListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        StudyAdminPageComponent,
        StudyEditPageComponent,
        StudyListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        StudyAdminPageRoutingModule,
        StudyFormModule,
        StudyCollectionModule,
        StudyModule,
    ],
    providers: [
        StudyEditPageResolverService, 
        StudyListPageResolverService,
    ],
})
export class StudyAdminPageModule {}
