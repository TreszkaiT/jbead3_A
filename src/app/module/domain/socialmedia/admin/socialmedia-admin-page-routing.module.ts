import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SocialmediaAdminPageComponent } from './page/admin';
import { SocialmediaEditPageComponent, SocialmediaEditPageResolverService } from './page/edit';
import { SocialmediaListPageComponent, SocialmediaListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: SocialmediaAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: SocialmediaEditPageComponent,
                path: 'edit/:socialmediaId',
                pathMatch: 'full',
                resolve: { data: SocialmediaEditPageResolverService },
            },
            {
                component: SocialmediaListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: SocialmediaListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SocialmediaAdminPageRoutingModule {}
