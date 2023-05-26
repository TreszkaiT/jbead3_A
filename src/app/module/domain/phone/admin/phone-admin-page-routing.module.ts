import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneAdminPageComponent } from './page/admin';
import { PhoneEditPageComponent, PhoneEditPageResolverService } from './page/edit';
import { PhoneListPageComponent, PhoneListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: PhoneAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: PhoneEditPageComponent,
                path: 'edit/:phoneId',
                pathMatch: 'full',
                resolve: { data: PhoneEditPageResolverService },
            },
            {
                component: PhoneListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: PhoneListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PhoneAdminPageRoutingModule {}
