import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    PhoneEntity,
    PhoneStoreService,
    PhoneTableParams,
} from 'src/app/api/domain/phone';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class PhoneTableService {
    private params!: PhoneTableParams;
    private params$$: ReplaySubject<PhoneTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private phoneStoreService: PhoneStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editPhone(phone: PhoneEntity): void {
        this.router.navigate(['../edit', phone?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public deletePhone(phone: PhoneEntity): void {
        this.phoneStoreService.dispatchDeleteEntityAction(phone.id);
    }

    public init$(): Observable<PhoneTableParams> {
        
        // this.phoneStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.phoneStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((phones) => {
                this.params = {
                    //selectedEntity,
                    phones,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
