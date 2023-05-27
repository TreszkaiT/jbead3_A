import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PictureStoreService } from 'src/app/api/domain/picture';


@Injectable()
export class PictureEditPageResolverService implements Resolve<void> {
	public constructor(private pictureStoreService: PictureStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.pictureStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
