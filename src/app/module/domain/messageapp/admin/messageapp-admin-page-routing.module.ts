import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessageappAdminPageComponent } from './page/admin';
import { MessageappEditPageComponent, MessageappEditPageResolverService } from './page/edit';
import { MessageappListPageComponent, MessageappListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: MessageappAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: MessageappEditPageComponent,
                path: 'edit/:messageappId',
                pathMatch: 'full',
                resolve: { data: MessageappEditPageResolverService },
            },
            {
                component: MessageappListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: MessageappListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MessageappAdminPageRoutingModule {}
