import { Observable } from 'rxjs';
import { PictureStoreService } from 'src/app/api/domain/picture';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-picture-admin-page',
    templateUrl: './picture-admin-page.component.html',
    styleUrls: ['./picture-admin-page.component.scss'],
})
export class PictureAdminPageComponent implements OnInit {

    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private pictureStoreService: PictureStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.pictureStoreService.selectNewEntityButtonEnabled$();
    }
}
