import { Observable } from 'rxjs';
import { PhoneStoreService } from 'src/app/api/domain/phone';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-phone-admin-page',
    templateUrl: './phone-admin-page.component.html',
    styleUrls: ['./phone-admin-page.component.scss'],
})
export class PhoneAdminPageComponent implements OnInit {
    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private phoneStoreService: PhoneStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.phoneStoreService.selectNewEntityButtonEnabled$();
    }
}
