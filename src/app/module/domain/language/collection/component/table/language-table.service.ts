import { first, merge, Observable, ReplaySubject, switchMap } from 'rxjs';
import {
    LanguageEntity,
    LanguageStoreService,
    LanguageTableParams,
} from 'src/app/api/domain/language';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class LanguageTableService {
    private params!: LanguageTableParams;
    private params$$: ReplaySubject<LanguageTableParams>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private languageStoreService: LanguageStoreService,
        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public editLanguage(language: LanguageEntity): void {
        this.router.navigate(['../edit', language?.id], {
            relativeTo: this.activatedRoute,
        });
    }

    public deleteLanguage(language: LanguageEntity): void {
        this.languageStoreService.dispatchDeleteEntityAction(language.id);
    }

    public init$(): Observable<LanguageTableParams> {
        
        // this.languageStoreService.dispatchListEntitiesAction();
          
        return merge(
            this.languageStoreService.selectEntityList$().pipe(first())
        ).pipe(
            switchMap((languages) => {
                this.params = {
                    //selectedEntity,
                    languages,
                };

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }
}
