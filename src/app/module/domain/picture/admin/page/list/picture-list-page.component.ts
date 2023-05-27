
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-picture-list-page',
    templateUrl: './picture-list-page.component.html',
    styleUrls: ['./picture-list-page.component.scss'],
})
export class PictureListPageComponent {}