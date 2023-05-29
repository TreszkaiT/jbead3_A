import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    StudyEntity,
    StudyEntityAdd,
    StudyEntityUpdate,
    StudyFormParams,
    StudyStoreService,
    StudyUtilService,
} from 'src/app/api/domain/study';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class StudyFormService {
    private formGroup!: FormGroup;
    private params!: StudyFormParams;
    private params$$: ReplaySubject<StudyFormParams>;
    private study!: StudyEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private studyStoreService: StudyStoreService,
        private studyUtilService: StudyUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<StudyFormParams> {  // a logika, mely a Study-t dropdown menüben betölti a Study-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.studyStoreService.selectEntity$(data['studyId']),                    
                ])
            ),
            switchMap(([study]) => {
                this.study = study;
                this.formGroup = this.studyUtilService.createFormGroup(study);
                this.params = this.createStudyParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.study) {                        // ha van már ilyen Study, akkor
            this.updateStudy();                  // updatelem
        } else {
            this.addStudy();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addStudy(): void {       // a studyUtilService-el készít nekünk egy új Studyt
        const study: StudyEntityAdd = this.studyUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.studyStoreService.dispatchAddEntityAction(study);
    }

    private createStudyParams(formGroup: FormGroup): StudyFormParams {
        const studyFormParams: StudyFormParams = {
            formGroup,
        };

        return studyFormParams;
    }

    private updateStudy(): void {       // a studyUtilService-el készít nekünk egy létező Studyt, amit majd be tudunk updatelni
        const study: StudyEntityUpdate = this.studyUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.studyStoreService.dispatchUpdateEntityAction(study);
    }
}
