import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { StudyTableService } from './study-table.service';
import { StudyEntity, StudyTableParams } from 'src/app/api/domain/study';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [StudyTableService],
	selector: 'app-study-table',
	templateUrl: './study-table.component.html',
	styleUrls: ['./study-table.component.scss'],
})
export class StudyTableComponent implements OnInit {
	public params$!: Observable<StudyTableParams>;

	public constructor(private componentService: StudyTableService) {
	}

	public editStudy(study: StudyEntity): void {
		this.componentService.editStudy(study);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
