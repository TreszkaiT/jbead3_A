import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-socialmedia-edit-page',
    templateUrl: './socialmedia-edit-page.component.html',
    styleUrls: ['./socialmedia-edit-page.component.scss'],
})
export class SocialmediaEditPageComponent implements OnInit {
    public socialmediaId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.socialmediaId = this.activatedRoute.snapshot.params['socialmediaId'];
    }
}
