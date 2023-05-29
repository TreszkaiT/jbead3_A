import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherskillAdminPageComponent } from './page/admin';
import { OtherskillEditPageComponent, OtherskillEditPageResolverService } from './page/edit';
import { OtherskillListPageComponent, OtherskillListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: OtherskillAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: OtherskillEditPageComponent,
                path: 'edit/:otherskillId',
                pathMatch: 'full',
                resolve: { data: OtherskillEditPageResolverService },
            },
            {
                component: OtherskillListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: OtherskillListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OtherskillAdminPageRoutingModule {}
