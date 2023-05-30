import { Observable } from 'rxjs';
import { StudyStoreService } from 'src/app/api/domain/study';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-study-admin-page',
    templateUrl: './study-admin-page.component.html',
    styleUrls: ['./study-admin-page.component.scss'],
})
export class StudyAdminPageComponent implements OnInit {

    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private studyStoreService: StudyStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.studyStoreService.selectNewEntityButtonEnabled$();
    }
}
