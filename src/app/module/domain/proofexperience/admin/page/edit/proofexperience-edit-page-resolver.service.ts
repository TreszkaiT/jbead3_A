import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProofexperienceStoreService } from 'src/app/api/domain/proofexperience';


@Injectable()
export class ProofexperienceEditPageResolverService implements Resolve<void> {
	public constructor(private proofexperienceStoreService: ProofexperienceStoreService) {}

	public resolve(): void | Observable<void> | Promise<void> {
		this.proofexperienceStoreService.dispatchChangeNewEntityButtonEnabled(false);
	}
}
