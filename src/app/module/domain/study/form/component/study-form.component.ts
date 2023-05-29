import { Observable } from 'rxjs';
import { StudyFormParams } from 'src/app/api/domain/study';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { StudyFormService } from './study-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [StudyFormService],
    selector: 'app-study-form',
    templateUrl: './study-form.component.html',
    styleUrls: ['./study-form.component.scss'],
})
export class StudyFormComponent implements OnInit {
    public params$!: Observable<StudyFormParams>;

    public constructor(private componentService: StudyFormService) {}

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
