import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { ProofexperienceModule } from '../proofexperience.module';
import { ProofexperienceCollectionModule } from '../collection/proofexperience-collection.module';
import { ProofexperienceFormModule } from '../form/proofexperience-form.module';
import { ProofexperienceAdminPageRoutingModule } from './proofexperience-admin-page-routing.module';
import { ProofexperienceAdminPageComponent } from './page/admin';
import { ProofexperienceEditPageComponent, ProofexperienceEditPageResolverService } from './page/edit';
import { ProofexperienceListPageComponent, ProofexperienceListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        ProofexperienceAdminPageComponent,
        ProofexperienceEditPageComponent,
        ProofexperienceListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProofexperienceAdminPageRoutingModule,
        ProofexperienceFormModule,
        ProofexperienceCollectionModule,
        ProofexperienceModule,
    ],
    providers: [
        ProofexperienceEditPageResolverService, 
        ProofexperienceListPageResolverService,
    ],
})
export class ProofexperienceAdminPageModule {}
