import { Observable } from 'rxjs';
import { PictureFormParams } from 'src/app/api/domain/picture';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PictureFormService } from './picture-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PictureFormService],
    selector: 'app-picture-form',
    templateUrl: './picture-form.component.html',
    styleUrls: ['./picture-form.component.scss'],
})
export class PictureFormComponent implements OnInit {
    public params$!: Observable<PictureFormParams>;

    public constructor(private componentService: PictureFormService) {}

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
