
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-messageapp-list-page',
    templateUrl: './messageapp-list-page.component.html',
    styleUrls: ['./messageapp-list-page.component.scss'],
})
export class MessageappListPageComponent {}