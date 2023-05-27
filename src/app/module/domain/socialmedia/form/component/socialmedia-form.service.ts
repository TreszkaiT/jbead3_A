import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    SocialmediaEntity,
    SocialmediaEntityAdd,
    SocialmediaEntityUpdate,
    SocialmediaFormParams,
    SocialmediaStoreService,
    SocialmediaUtilService,
} from 'src/app/api/domain/socialmedia';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class SocialmediaFormService {
    private formGroup!: FormGroup;
    private params!: SocialmediaFormParams;
    private params$$: ReplaySubject<SocialmediaFormParams>;
    private socialmedia!: SocialmediaEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private socialmediaStoreService: SocialmediaStoreService,
        private socialmediaUtilService: SocialmediaUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<SocialmediaFormParams> {  // a logika, mely a Socialmedia-t dropdown menüben betölti a Socialmedia-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.socialmediaStoreService.selectEntity$(data['socialmediaId']),                    
                ])
            ),
            switchMap(([socialmedia]) => {
                this.socialmedia = socialmedia;
                this.formGroup = this.socialmediaUtilService.createFormGroup(socialmedia);
                this.params = this.createSocialmediaParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.socialmedia) {                        // ha van már ilyen Socialmedia, akkor
            this.updateSocialmedia();                  // updatelem
        } else {
            this.addSocialmedia();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addSocialmedia(): void {       // a socialmediaUtilService-el készít nekünk egy új Socialmediat
        const socialmedia: SocialmediaEntityAdd = this.socialmediaUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.socialmediaStoreService.dispatchAddEntityAction(socialmedia);
    }

    private createSocialmediaParams(formGroup: FormGroup): SocialmediaFormParams {
        const socialmediaFormParams: SocialmediaFormParams = {
            formGroup,
        };

        return socialmediaFormParams;
    }

    private updateSocialmedia(): void {       // a socialmediaUtilService-el készít nekünk egy létező Socialmediat, amit majd be tudunk updatelni
        const socialmedia: SocialmediaEntityUpdate = this.socialmediaUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.socialmediaStoreService.dispatchUpdateEntityAction(socialmedia);
    }
}
