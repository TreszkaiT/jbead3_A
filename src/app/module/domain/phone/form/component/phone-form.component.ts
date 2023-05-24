import { Observable } from 'rxjs';
import { PhoneFormParams } from 'src/app/api/domain/phone';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PhoneFormService } from './phone-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PhoneFormService],
    selector: 'app-phone-form',
    templateUrl: './phone-form.component.html',
    styleUrls: ['./phone-form.component.scss'],
})
export class PhoneFormComponent implements OnInit {
    public params$!: Observable<PhoneFormParams>;

    public constructor(private componentService: PhoneFormService) {}

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
