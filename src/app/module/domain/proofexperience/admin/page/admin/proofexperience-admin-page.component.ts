import { Observable } from 'rxjs';
import { ProofexperienceStoreService } from 'src/app/api/domain/proofexperience';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-proofexperience-admin-page',
    templateUrl: './proofexperience-admin-page.component.html',
    styleUrls: ['./proofexperience-admin-page.component.scss'],
})
export class ProofexperienceAdminPageComponent implements OnInit {

    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private proofexperienceStoreService: ProofexperienceStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.proofexperienceStoreService.selectNewEntityButtonEnabled$();
    }
}
