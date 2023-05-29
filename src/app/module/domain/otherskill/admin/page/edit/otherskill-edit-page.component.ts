import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-otherskill-edit-page',
    templateUrl: './otherskill-edit-page.component.html',
    styleUrls: ['./otherskill-edit-page.component.scss'],
})
export class OtherskillEditPageComponent implements OnInit {
    public otherskillId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.otherskillId = this.activatedRoute.snapshot.params['otherskillId'];
    }
}
