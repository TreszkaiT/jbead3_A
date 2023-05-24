import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PhoneTableService } from './phone-table.service';
import { PhoneEntity, PhoneTableParams } from 'src/app/api/domain/phone';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [PhoneTableService],
	selector: 'app-phone-table',
	templateUrl: './phone-table.component.html',
	styleUrls: ['./phone-table.component.scss'],
})
export class PhoneTableComponent implements OnInit {
	public params$!: Observable<PhoneTableParams>;

	public constructor(private componentService: PhoneTableService) {
	}

	public editPhone(phone: PhoneEntity): void {
		this.componentService.editPhone(phone);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
