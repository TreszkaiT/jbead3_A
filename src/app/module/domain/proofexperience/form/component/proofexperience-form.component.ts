import { Observable } from 'rxjs';
import { ProofexperienceFormParams } from 'src/app/api/domain/proofexperience';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ProofexperienceFormService } from './proofexperience-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ProofexperienceFormService],
    selector: 'app-proofexperience-form',
    templateUrl: './proofexperience-form.component.html',
    styleUrls: ['./proofexperience-form.component.scss'],
})
export class ProofexperienceFormComponent implements OnInit {
    public params$!: Observable<ProofexperienceFormParams>;

    public constructor(private componentService: ProofexperienceFormService) {}

    public cancel(): void {
        this.componentService.cancel();
    }

    public ngOnInit(): void {
        this.params$ = this.componentService.init$();
    }

    public submit(): void {
        this.componentService.submit();
    }
}
