import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudyAdminPageComponent } from './page/admin';
import { StudyEditPageComponent, StudyEditPageResolverService } from './page/edit';
import { StudyListPageComponent, StudyListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: StudyAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: StudyEditPageComponent,
                path: 'edit/:studyId',
                pathMatch: 'full',
                resolve: { data: StudyEditPageResolverService },
            },
            {
                component: StudyListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: StudyListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudyAdminPageRoutingModule {}
