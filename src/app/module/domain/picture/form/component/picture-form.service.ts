import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    PictureEntity,
    PictureEntityAdd,
    PictureEntityUpdate,
    PictureFormParams,
    PictureStoreService,
    PictureUtilService,
} from 'src/app/api/domain/picture';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class PictureFormService {
    private formGroup!: FormGroup;
    private params!: PictureFormParams;
    private params$$: ReplaySubject<PictureFormParams>;
    private picture!: PictureEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private pictureStoreService: PictureStoreService,
        private pictureUtilService: PictureUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<PictureFormParams> {  // a logika, mely a Picture-t dropdown menüben betölti a Picture-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.pictureStoreService.selectEntity$(data['pictureId']),                    
                ])
            ),
            switchMap(([picture]) => {
                this.picture = picture;
                this.formGroup = this.pictureUtilService.createFormGroup(picture);
                this.params = this.createPictureParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.picture) {                        // ha van már ilyen Picture, akkor
            this.updatePicture();                  // updatelem
        } else {
            this.addPicture();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addPicture(): void {       // a pictureUtilService-el készít nekünk egy új Picturet
        const picture: PictureEntityAdd = this.pictureUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.pictureStoreService.dispatchAddEntityAction(picture);
    }

    private createPictureParams(formGroup: FormGroup): PictureFormParams {
        const pictureFormParams: PictureFormParams = {
            formGroup,
        };

        return pictureFormParams;
    }

    private updatePicture(): void {       // a pictureUtilService-el készít nekünk egy létező Picturet, amit majd be tudunk updatelni
        const picture: PictureEntityUpdate = this.pictureUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.pictureStoreService.dispatchUpdateEntityAction(picture);
    }
}
