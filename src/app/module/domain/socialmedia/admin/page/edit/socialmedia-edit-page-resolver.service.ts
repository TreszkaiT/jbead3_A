import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SocialmediaStoreService } from 'src/app/api/domain/socialmedia';


@Injectable()
export class SocialmediaEditPageResolverService implements Resolve<void> {
	public constructor(private socialmediaStoreService: SocialmediaStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.socialmediaStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
