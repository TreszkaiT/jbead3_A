import { Observable } from 'rxjs';
import { MessageappStoreService } from 'src/app/api/domain/messageapp';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-messageapp-admin-page',
    templateUrl: './messageapp-admin-page.component.html',
    styleUrls: ['./messageapp-admin-page.component.scss'],
})
export class MessageappAdminPageComponent implements OnInit {

    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private messageappStoreService: MessageappStoreService
    ) {}

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ =
            this.messageappStoreService.selectNewEntityButtonEnabled$();
    }
}
