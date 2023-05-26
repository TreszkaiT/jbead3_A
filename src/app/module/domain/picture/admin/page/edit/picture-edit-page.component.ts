import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-picture-edit-page',
    templateUrl: './picture-edit-page.component.html',
    styleUrls: ['./picture-edit-page.component.scss'],
})
export class PictureEditPageComponent implements OnInit {
    public pictureId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.pictureId = this.activatedRoute.snapshot.params['pictureId'];
    }
}
