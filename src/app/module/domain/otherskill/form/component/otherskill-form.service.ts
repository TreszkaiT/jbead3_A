import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    OtherskillEntity,
    OtherskillEntityAdd,
    OtherskillEntityUpdate,
    OtherskillFormParams,
    OtherskillStoreService,
    OtherskillUtilService,
} from 'src/app/api/domain/otherskill';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class OtherskillFormService {
    private formGroup!: FormGroup;
    private params!: OtherskillFormParams;
    private params$$: ReplaySubject<OtherskillFormParams>;
    private otherskill!: OtherskillEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private otherskillStoreService: OtherskillStoreService,
        private otherskillUtilService: OtherskillUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<OtherskillFormParams> {  // a logika, mely a Otherskill-t dropdown menüben betölti a Otherskill-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.otherskillStoreService.selectEntity$(data['otherskillId']),                    
                ])
            ),
            switchMap(([otherskill]) => {
                this.otherskill = otherskill;
                this.formGroup = this.otherskillUtilService.createFormGroup(otherskill);
                this.params = this.createOtherskillParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.otherskill) {                        // ha van már ilyen Otherskill, akkor
            this.updateOtherskill();                  // updatelem
        } else {
            this.addOtherskill();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addOtherskill(): void {       // a otherskillUtilService-el készít nekünk egy új Otherskillt
        const otherskill: OtherskillEntityAdd = this.otherskillUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.otherskillStoreService.dispatchAddEntityAction(otherskill);
    }

    private createOtherskillParams(formGroup: FormGroup): OtherskillFormParams {
        const otherskillFormParams: OtherskillFormParams = {
            formGroup,
        };

        return otherskillFormParams;
    }

    private updateOtherskill(): void {       // a otherskillUtilService-el készít nekünk egy létező Otherskillt, amit majd be tudunk updatelni
        const otherskill: OtherskillEntityUpdate = this.otherskillUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.otherskillStoreService.dispatchUpdateEntityAction(otherskill);
    }
}
