import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LanguageStoreService } from 'src/app/api/domain/language';


@Injectable()
export class LanguageEditPageResolverService implements Resolve<void> {
	public constructor(private languageStoreService: LanguageStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.languageStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
