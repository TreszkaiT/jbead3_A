import { Observable } from 'rxjs';
import { LanguageStoreService } from 'src/app/api/domain/language';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-language-admin-page',
    templateUrl: './language-admin-page.component.html',
    styleUrls: ['./language-admin-page.component.scss'],
})
export class LanguageAdminPageComponent implements OnInit {

    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private languageStoreService: LanguageStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.languageStoreService.selectNewEntityButtonEnabled$();
    }
}
