import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../../common';
import { MessageappModule } from '../messageapp.module';
import { MessageappCollectionModule } from '../collection/messageapp-collection.module';
import { MessageappFormModule } from '../form/messageapp-form.module';
import { MessageappAdminPageRoutingModule } from './messageapp-admin-page-routing.module';
import { MessageappAdminPageComponent } from './page/admin';
import { MessageappEditPageComponent, MessageappEditPageResolverService } from './page/edit';
import { MessageappListPageComponent, MessageappListPageResolverService } from './page/list';

@NgModule({
    declarations: [
        MessageappAdminPageComponent,
        MessageappEditPageComponent,
        MessageappListPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MessageappAdminPageRoutingModule,
        MessageappFormModule,
        MessageappCollectionModule,
        MessageappModule,
    ],
    providers: [
        MessageappEditPageResolverService, 
        MessageappListPageResolverService,
    ],
})
export class MessageappAdminPageModule {}
