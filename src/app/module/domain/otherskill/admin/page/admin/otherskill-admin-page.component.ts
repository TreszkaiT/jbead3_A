import { Observable } from 'rxjs';
import { OtherskillStoreService } from 'src/app/api/domain/otherskill';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-otherskill-admin-page',
    templateUrl: './otherskill-admin-page.component.html',
    styleUrls: ['./otherskill-admin-page.component.scss'],
})
export class OtherskillAdminPageComponent implements OnInit {

    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private otherskillStoreService: OtherskillStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.otherskillStoreService.selectNewEntityButtonEnabled$();
    }
}
