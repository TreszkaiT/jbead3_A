import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { LanguageModule } from '../language.module';
import { LanguageCollectionModule } from '../collection/language-collection.module';
import { LanguageFormModule } from '../form/language-form.module';
import { LanguageAdminPageRoutingModule } from './language-admin-page-routing.module';
import { LanguageAdminPageComponent } from './page/admin';
import { LanguageEditPageComponent, LanguageEditPageResolverService } from './page/edit';
import { LanguageListPageComponent, LanguageListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        LanguageAdminPageComponent,
        LanguageEditPageComponent,
        LanguageListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        LanguageAdminPageRoutingModule,
        LanguageFormModule,
        LanguageCollectionModule,
        LanguageModule,
    ],
    providers: [
        LanguageEditPageResolverService, 
        LanguageListPageResolverService,
    ],
})
export class LanguageAdminPageModule {}
