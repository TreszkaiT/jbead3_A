import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-phone-edit-page',
    templateUrl: './phone-edit-page.component.html',
    styleUrls: ['./phone-edit-page.component.scss'],
})
export class PhoneEditPageComponent implements OnInit {
    public phoneId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.phoneId = this.activatedRoute.snapshot.params['phoneId'];
    }
}
