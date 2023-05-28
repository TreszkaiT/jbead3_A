import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LanguageAdminPageComponent } from './page/admin';
import { LanguageEditPageComponent, LanguageEditPageResolverService } from './page/edit';
import { LanguageListPageComponent, LanguageListPageResolverService } from './page/list';

const routes: Routes = [
    {
        path: '',
        component: LanguageAdminPageComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list',
            },
            {
                component: LanguageEditPageComponent,
                path: 'edit/:languageId',
                pathMatch: 'full',
                resolve: { data: LanguageEditPageResolverService },
            },
            {
                component: LanguageListPageComponent,
                path: 'list',
                pathMatch: 'full',
                resolve: { data: LanguageListPageResolverService },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LanguageAdminPageRoutingModule {}
