import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-proofexperience-edit-page',
    templateUrl: './proofexperience-edit-page.component.html',
    styleUrls: ['./proofexperience-edit-page.component.scss'],
})
export class ProofexperienceEditPageComponent implements OnInit {
    public proofexperienceId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.proofexperienceId = this.activatedRoute.snapshot.params['proofexperienceId'];
    }
}
