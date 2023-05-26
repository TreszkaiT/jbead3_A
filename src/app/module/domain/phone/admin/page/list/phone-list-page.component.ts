
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-phone-list-page',
    templateUrl: './phone-list-page.component.html',
    styleUrls: ['./phone-list-page.component.scss'],
})
export class PhoneListPageComponent {}