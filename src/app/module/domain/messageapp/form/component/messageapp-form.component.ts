import { Observable } from 'rxjs';
import { MessageappFormParams } from 'src/app/api/domain/messageapp';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MessageappFormService } from './messageapp-form.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MessageappFormService],
    selector: 'app-messageapp-form',
    templateUrl: './messageapp-form.component.html',
    styleUrls: ['./messageapp-form.component.scss'],
})
export class MessageappFormComponent implements OnInit {
    public params$!: Observable<MessageappFormParams>;

    public constructor(private componentService: MessageappFormService) {}

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
