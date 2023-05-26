import { Observable } from 'rxjs';
import { SocialmediaFormParams } from 'src/app/api/domain/socialmedia';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SocialmediaFormService } from './socialmedia-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [SocialmediaFormService],
    selector: 'app-socialmedia-form',
    templateUrl: './socialmedia-form.component.html',
    styleUrls: ['./socialmedia-form.component.scss'],
})
export class SocialmediaFormComponent implements OnInit {
    public params$!: Observable<SocialmediaFormParams>;

    public constructor(private componentService: SocialmediaFormService) {}

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
