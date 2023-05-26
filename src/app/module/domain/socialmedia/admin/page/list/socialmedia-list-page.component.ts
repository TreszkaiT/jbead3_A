
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-socialmedia-list-page',
    templateUrl: './socialmedia-list-page.component.html',
    styleUrls: ['./socialmedia-list-page.component.scss'],
})
export class SocialmediaListPageComponent {}