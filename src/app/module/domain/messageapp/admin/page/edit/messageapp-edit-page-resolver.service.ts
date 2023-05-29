import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MessageappStoreService } from 'src/app/api/domain/messageapp';


@Injectable()
export class MessageappEditPageResolverService implements Resolve<void> {
	public constructor(private messageappStoreService: MessageappStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.messageappStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
