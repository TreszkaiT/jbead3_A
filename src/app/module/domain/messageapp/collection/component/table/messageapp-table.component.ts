import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MessageappTableService } from './messageapp-table.service';
import { MessageappEntity, MessageappTableParams } from 'src/app/api/domain/messageapp';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [MessageappTableService],
	selector: 'app-messageapp-table',
	templateUrl: './messageapp-table.component.html',
	styleUrls: ['./messageapp-table.component.scss'],
})
export class MessageappTableComponent implements OnInit {
	public params$!: Observable<MessageappTableParams>;

	public constructor(private componentService: MessageappTableService) {
	}

	public editMessageapp(messageapp: MessageappEntity): void {
		this.componentService.editMessageapp(messageapp);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
