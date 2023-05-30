import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-study-edit-page',
    templateUrl: './study-edit-page.component.html',
    styleUrls: ['./study-edit-page.component.scss'],
})
export class StudyEditPageComponent implements OnInit {
    public studyId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.studyId = this.activatedRoute.snapshot.params['studyId'];
    }
}
