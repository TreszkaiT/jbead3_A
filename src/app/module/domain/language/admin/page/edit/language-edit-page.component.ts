import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-language-edit-page',
    templateUrl: './language-edit-page.component.html',
    styleUrls: ['./language-edit-page.component.scss'],
})
export class LanguageEditPageComponent implements OnInit {
    public languageId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {}

    public ngOnInit(): void {
        this.languageId = this.activatedRoute.snapshot.params['languageId'];
    }
}
