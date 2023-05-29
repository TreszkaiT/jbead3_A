
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-study-list-page',
    templateUrl: './study-list-page.component.html',
    styleUrls: ['./study-list-page.component.scss'],
})
export class StudyListPageComponent {}