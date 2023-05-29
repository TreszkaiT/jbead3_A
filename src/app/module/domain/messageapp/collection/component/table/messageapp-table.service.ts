import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    MessageappEntity,
    MessageappStoreService,
    MessageappTableParams,
} from 'src/app/api/domain/messageapp';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class MessageappTableService {
    private params!: MessageappTableParams;
    private params$$: ReplaySubject<MessageappTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private messageappStoreService: MessageappStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editMessageapp(messageapp: MessageappEntity): void {
        this.router.navigate(['../edit', messageapp?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<MessageappTableParams> {
        
        // this.messageappStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.messageappStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((messageapps) => {
                this.params = {
                    //selectedEntity,
                    messageapps,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
