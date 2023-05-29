import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-messageapp-edit-page',
    templateUrl: './messageapp-edit-page.component.html',
    styleUrls: ['./messageapp-edit-page.component.scss'],
})
export class MessageappEditPageComponent implements OnInit {
    public messageappId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.messageappId = this.activatedRoute.snapshot.params['messageappId'];
    }
}
