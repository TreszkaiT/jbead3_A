import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProofexperienceAdminPageComponent } from './page/admin';
import { ProofexperienceEditPageComponent, ProofexperienceEditPageResolverService } from './page/edit';
import { ProofexperienceListPageComponent, ProofexperienceListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: ProofexperienceAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: ProofexperienceEditPageComponent,
                path: 'edit/:proofexperienceId',
                pathMatch: 'full',
                resolve: { data: ProofexperienceEditPageResolverService },
            },
            {
                component: ProofexperienceListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: ProofexperienceListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProofexperienceAdminPageRoutingModule {}
