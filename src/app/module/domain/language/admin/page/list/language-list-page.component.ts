
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-language-list-page',
    templateUrl: './language-list-page.component.html',
    styleUrls: ['./language-list-page.component.scss'],
})
export class LanguageListPageComponent {}