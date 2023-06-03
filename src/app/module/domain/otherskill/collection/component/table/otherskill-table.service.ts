import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    OtherskillEntity,
    OtherskillStoreService,
    OtherskillTableParams,
} from 'src/app/api/domain/otherskill';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class OtherskillTableService {
    private params!: OtherskillTableParams;
    private params$$: ReplaySubject<OtherskillTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private otherskillStoreService: OtherskillStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editOtherskill(otherskill: OtherskillEntity): void {
        this.router.navigate(['../edit', otherskill?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public deleteOtherskill(otherskill: OtherskillEntity): void {
        this.otherskillStoreService.dispatchDeleteEntityAction(otherskill.id);
    }

    public init$(): Observable<OtherskillTableParams> {
        
        // this.otherskillStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.otherskillStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((otherskills) => {
                this.params = {
                    //selectedEntity,
                    otherskills,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
