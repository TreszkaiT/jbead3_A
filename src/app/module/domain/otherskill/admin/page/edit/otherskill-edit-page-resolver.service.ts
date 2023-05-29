import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { OtherskillStoreService } from 'src/app/api/domain/otherskill';


@Injectable()
export class OtherskillEditPageResolverService implements Resolve<void> {
	public constructor(private otherskillStoreService: OtherskillStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.otherskillStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
