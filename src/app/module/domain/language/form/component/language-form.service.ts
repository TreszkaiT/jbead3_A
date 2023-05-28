import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    LanguageEntity,
    LanguageEntityAdd,
    LanguageEntityUpdate,
    LanguageFormParams,
    LanguageStoreService,
    LanguageUtilService,
} from 'src/app/api/domain/language';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class LanguageFormService {
    private formGroup!: FormGroup;
    private params!: LanguageFormParams;
    private params$$: ReplaySubject<LanguageFormParams>;
    private language!: LanguageEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private languageStoreService: LanguageStoreService,
        private languageUtilService: LanguageUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<LanguageFormParams> {  // a logika, mely a Language-t dropdown menüben betölti a Language-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.languageStoreService.selectEntity$(data['languageId']),                    
                ])
            ),
            switchMap(([language]) => {
                this.language = language;
                this.formGroup = this.languageUtilService.createFormGroup(language);
                this.params = this.createLanguageParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.language) {                        // ha van már ilyen Language, akkor
            this.updateLanguage();                  // updatelem
        } else {
            this.addLanguage();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addLanguage(): void {       // a languageUtilService-el készít nekünk egy új Languaget
        const language: LanguageEntityAdd = this.languageUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.languageStoreService.dispatchAddEntityAction(language);
    }

    private createLanguageParams(formGroup: FormGroup): LanguageFormParams {
        const languageFormParams: LanguageFormParams = {
            formGroup,
        };

        return languageFormParams;
    }

    private updateLanguage(): void {       // a languageUtilService-el készít nekünk egy létező Languaget, amit majd be tudunk updatelni
        const language: LanguageEntityUpdate = this.languageUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.languageStoreService.dispatchUpdateEntityAction(language);
    }
}
