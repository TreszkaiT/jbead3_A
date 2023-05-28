import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageTableService } from './language-table.service';
import { LanguageEntity, LanguageTableParams } from 'src/app/api/domain/language';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [LanguageTableService],
	selector: 'app-language-table',
	templateUrl: './language-table.component.html',
	styleUrls: ['./language-table.component.scss'],
})
export class LanguageTableComponent implements OnInit {
	public params$!: Observable<LanguageTableParams>;

	public constructor(private componentService: LanguageTableService) {
	}

	public editLanguage(language: LanguageEntity): void {
		this.componentService.editLanguage(language);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
