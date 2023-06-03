import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { OtherskillTableService } from './otherskill-table.service';
import { OtherskillEntity, OtherskillTableParams } from 'src/app/api/domain/otherskill';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [OtherskillTableService],
	selector: 'app-otherskill-table',
	templateUrl: './otherskill-table.component.html',
	styleUrls: ['./otherskill-table.component.scss'],
})
export class OtherskillTableComponent implements OnInit {
	public params$!: Observable<OtherskillTableParams>;

	public constructor(private componentService: OtherskillTableService) {
	}

	public editOtherskill(otherskill: OtherskillEntity): void {
		this.componentService.editOtherskill(otherskill);
	}

	public deleteOtherskill(otherskil: OtherskillEntity): void {
		this.componentService.deleteOtherskill(otherskil);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
