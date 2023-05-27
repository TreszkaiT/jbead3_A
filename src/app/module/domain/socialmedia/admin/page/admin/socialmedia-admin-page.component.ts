import { Observable } from 'rxjs';
import { SocialmediaStoreService } from 'src/app/api/domain/socialmedia';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-socialmedia-admin-page',
    templateUrl: './socialmedia-admin-page.component.html',
    styleUrls: ['./socialmedia-admin-page.component.scss'],
})
export class SocialmediaAdminPageComponent implements OnInit {

    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private socialmediaStoreService: SocialmediaStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.socialmediaStoreService.selectNewEntityButtonEnabled$();
    }
}
