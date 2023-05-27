import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    PictureEntity,
    PictureStoreService,
    PictureTableParams,
} from 'src/app/api/domain/picture';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class PictureTableService {
    private params!: PictureTableParams;
    private params$$: ReplaySubject<PictureTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private pictureStoreService: PictureStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editPicture(picture: PictureEntity): void {
        this.router.navigate(['../edit', picture?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<PictureTableParams> {
        
        // this.pictureStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.pictureStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((pictures) => {
                this.params = {
                    //selectedEntity,
                    pictures,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
