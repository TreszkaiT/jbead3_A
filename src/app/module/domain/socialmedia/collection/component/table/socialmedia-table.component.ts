import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SocialmediaTableService } from './socialmedia-table.service';
import { SocialmediaEntity, SocialmediaTableParams } from 'src/app/api/domain/socialmedia';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [SocialmediaTableService],
	selector: 'app-socialmedia-table',
	templateUrl: './socialmedia-table.component.html',
	styleUrls: ['./socialmedia-table.component.scss'],
})
export class SocialmediaTableComponent implements OnInit {
	public params$!: Observable<SocialmediaTableParams>;

	public constructor(private componentService: SocialmediaTableService) {
	}

	public editSocialmedia(socialmedia: SocialmediaEntity): void {
		this.componentService.editSocialmedia(socialmedia);
	}

	public deleteSocialmedia(socialmedia: SocialmediaEntity): void {
		this.componentService.deleteSocialmedia(socialmedia);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
