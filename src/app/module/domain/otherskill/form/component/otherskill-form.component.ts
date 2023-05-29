import { Observable } from 'rxjs';
import { OtherskillFormParams } from 'src/app/api/domain/otherskill';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { OtherskillFormService } from './otherskill-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [OtherskillFormService],
    selector: 'app-otherskill-form',
    templateUrl: './otherskill-form.component.html',
    styleUrls: ['./otherskill-form.component.scss'],
})
export class OtherskillFormComponent implements OnInit {
    public params$!: Observable<OtherskillFormParams>;

    public constructor(private componentService: OtherskillFormService) {}

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
