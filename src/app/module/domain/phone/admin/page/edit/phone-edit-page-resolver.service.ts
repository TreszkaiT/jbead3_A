import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PhoneStoreService } from 'src/app/api/domain/phone';


@Injectable()
export class PhoneEditPageResolverService implements Resolve<void> {
	public constructor(private phoneStoreService: PhoneStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.phoneStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
