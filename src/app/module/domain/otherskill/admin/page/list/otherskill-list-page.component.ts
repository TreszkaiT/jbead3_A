
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-otherskill-list-page',
    templateUrl: './otherskill-list-page.component.html',
    styleUrls: ['./otherskill-list-page.component.scss'],
})
export class OtherskillListPageComponent {}