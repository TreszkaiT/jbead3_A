import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    ProofexperienceEntity,
    ProofexperienceEntityAdd,
    ProofexperienceEntityUpdate,
    ProofexperienceFormParams,
    ProofexperienceStoreService,
    ProofexperienceUtilService,
} from 'src/app/api/domain/proofexperience';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProofexperienceFormService {
    private formGroup!: FormGroup;
    private params!: ProofexperienceFormParams;
    private params$$: ReplaySubject<ProofexperienceFormParams>;
    private proofexperience!: ProofexperienceEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private proofexperienceStoreService: ProofexperienceStoreService,
        private proofexperienceUtilService: ProofexperienceUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<ProofexperienceFormParams> {  // a logika, mely a Proofexperience-t dropdown menüben betölti a Proofexperience-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.proofexperienceStoreService.selectEntity$(data['proofexperienceId']),                    
                ])
            ),
            switchMap(([proofexperience]) => {
                this.proofexperience = proofexperience;
                this.formGroup = this.proofexperienceUtilService.createFormGroup(proofexperience);
                this.params = this.createProofexperienceParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.proofexperience) {                        // ha van már ilyen Proofexperience, akkor
            this.updateProofexperience();                  // updatelem
        } else {
            this.addProofexperience();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addProofexperience(): void {       // a proofexperienceUtilService-el készít nekünk egy új Proofexperiencet
        const proofexperience: ProofexperienceEntityAdd = this.proofexperienceUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.proofexperienceStoreService.dispatchAddEntityAction(proofexperience);
    }

    private createProofexperienceParams(formGroup: FormGroup): ProofexperienceFormParams {
        const proofexperienceFormParams: ProofexperienceFormParams = {
            formGroup,
        };

        return proofexperienceFormParams;
    }

    private updateProofexperience(): void {       // a proofexperienceUtilService-el készít nekünk egy létező Proofexperiencet, amit majd be tudunk updatelni
        const proofexperience: ProofexperienceEntityUpdate = this.proofexperienceUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.proofexperienceStoreService.dispatchUpdateEntityAction(proofexperience);
    }
}
