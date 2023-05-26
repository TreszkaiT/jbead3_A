import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PictureAdminPageComponent } from './page/admin';
import { PictureEditPageComponent, PictureEditPageResolverService } from './page/edit';
import { PictureListPageComponent, PictureListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: PictureAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: PictureEditPageComponent,
                path: 'edit/:pictureId',
                pathMatch: 'full',
                resolve: { data: PictureEditPageResolverService },
            },
            {
                component: PictureListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: PictureListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PictureAdminPageRoutingModule {}
