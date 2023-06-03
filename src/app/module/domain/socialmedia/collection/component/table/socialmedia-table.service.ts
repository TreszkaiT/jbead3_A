import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    SocialmediaEntity,
    SocialmediaStoreService,
    SocialmediaTableParams,
} from 'src/app/api/domain/socialmedia';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SocialmediaTableService {
    private params!: SocialmediaTableParams;
    private params$$: ReplaySubject<SocialmediaTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private socialmediaStoreService: SocialmediaStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editSocialmedia(socialmedia: SocialmediaEntity): void {
        this.router.navigate(['../edit', socialmedia?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public deleteSocialmedia(socialmedia: SocialmediaEntity): void {
        this.socialmediaStoreService.dispatchDeleteEntityAction(socialmedia.id);
    }

    public init$(): Observable<SocialmediaTableParams> {
        
        // this.socialmediaStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.socialmediaStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((socialmedias) => {
                this.params = {
                    //selectedEntity,
                    socialmedias,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
