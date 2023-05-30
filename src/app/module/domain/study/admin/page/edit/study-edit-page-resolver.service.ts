import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StudyStoreService } from 'src/app/api/domain/study';


@Injectable()
export class StudyEditPageResolverService implements Resolve<void> {
	public constructor(private studyStoreService: StudyStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.studyStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
