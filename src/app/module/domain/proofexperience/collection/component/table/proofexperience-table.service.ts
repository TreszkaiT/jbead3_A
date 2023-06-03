import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    ProofexperienceEntity,
    ProofexperienceStoreService,
    ProofexperienceTableParams,
} from 'src/app/api/domain/proofexperience';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProofexperienceTableService {
    private params!: ProofexperienceTableParams;
    private params$$: ReplaySubject<ProofexperienceTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private proofexperienceStoreService: ProofexperienceStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editProofexperience(proofexperience: ProofexperienceEntity): void {
        this.router.navigate(['../edit', proofexperience?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public deleteProofexperience(proofexperience: ProofexperienceEntity): void {
        this.proofexperienceStoreService.dispatchDeleteEntityAction(proofexperience.id);
    }

    public init$(): Observable<ProofexperienceTableParams> {
        
        // this.proofexperienceStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.proofexperienceStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((proofexperiences) => {
                this.params = {
                    //selectedEntity,
                    proofexperiences,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
