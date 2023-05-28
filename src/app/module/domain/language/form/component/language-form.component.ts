import { Observable } from 'rxjs';
import { LanguageFormParams } from 'src/app/api/domain/language';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LanguageFormService } from './language-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LanguageFormService],
    selector: 'app-language-form',
    templateUrl: './language-form.component.html',
    styleUrls: ['./language-form.component.scss'],
})
export class LanguageFormComponent implements OnInit {
    public params$!: Observable<LanguageFormParams>;

    public constructor(private componentService: LanguageFormService) {}

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
