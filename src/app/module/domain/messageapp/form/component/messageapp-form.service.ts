import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
    MessageappEntity,
    MessageappEntityAdd,
    MessageappEntityUpdate,
    MessageappFormParams,
    MessageappStoreService,
    MessageappUtilService,
} from 'src/app/api/domain/messageapp';

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class MessageappFormService {
    private formGroup!: FormGroup;
    private params!: MessageappFormParams;
    private params$$: ReplaySubject<MessageappFormParams>;
    private messageapp!: MessageappEntity | undefined;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private messageappStoreService: MessageappStoreService,
        private messageappUtilService: MessageappUtilService,

        private router: Router
    ) {
        this.params$$ = new ReplaySubject();
    }

    public cancel(): void {
        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    public init$(): Observable<MessageappFormParams> {  // a logika, mely a Messageapp-t dropdown menüben betölti a Messageapp-hez
        return this.activatedRoute.params.pipe(
            switchMap((data) =>
                combineLatest([
                    this.messageappStoreService.selectEntity$(data['messageappId']),                    
                ])
            ),
            switchMap(([messageapp]) => {
                this.messageapp = messageapp;
                this.formGroup = this.messageappUtilService.createFormGroup(messageapp);
                this.params = this.createMessageappParams(this.formGroup);

                this.params$$.next(this.params);

                return this.params$$;
            })
        );
    }

    public mainImageUpload(file: File): void {
        console.log(file);
    }

    public submit(): void {                     // ha a Submit-ra kattintok, akkor
        if (this.messageapp) {                        // ha van már ilyen Messageapp, akkor
            this.updateMessageapp();                  // updatelem
        } else {
            this.addMessageapp();                     // amúgy meg létrehozom
        }

        this.router.navigate(['../../list'], {
            relativeTo: this.activatedRoute,
        });
    }

    private addMessageapp(): void {       // a messageappUtilService-el készít nekünk egy új Messageappt
        const messageapp: MessageappEntityAdd = this.messageappUtilService.createEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.messageappStoreService.dispatchAddEntityAction(messageapp);
    }

    private createMessageappParams(formGroup: FormGroup): MessageappFormParams {
        const messageappFormParams: MessageappFormParams = {
            formGroup,
        };

        return messageappFormParams;
    }

    private updateMessageapp(): void {       // a messageappUtilService-el készít nekünk egy létező Messageappt, amit majd be tudunk updatelni
        const messageapp: MessageappEntityUpdate = this.messageappUtilService.updateEntity(       // itt a util/service/ -ben van
            this.params.formGroup
        );

        this.messageappStoreService.dispatchUpdateEntityAction(messageapp);
    }
}
