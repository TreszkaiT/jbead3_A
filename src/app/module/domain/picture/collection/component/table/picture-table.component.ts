import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PictureTableService } from './picture-table.service';
import { PictureEntity, PictureTableParams } from 'src/app/api/domain/picture';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [PictureTableService],
	selector: 'app-picture-table',
	templateUrl: './picture-table.component.html',
	styleUrls: ['./picture-table.component.scss'],
})
export class PictureTableComponent implements OnInit {
	public params$!: Observable<PictureTableParams>;

	public constructor(private componentService: PictureTableService) {
	}

	public editPicture(picture: PictureEntity): void {
		this.componentService.editPicture(picture);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
