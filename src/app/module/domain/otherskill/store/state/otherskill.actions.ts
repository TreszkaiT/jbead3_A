import { OtherskillEntity, OtherskillEntityAdd, OtherskillEntityUpdate } from 'src/app/api/domain/otherskill';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addOtherskill = createAction(
    '[Otherskill Admin] Add Otherskill',
    props<{ otherskill: OtherskillEntityAdd }>()
);

export const addOtherskillFail = createAction(
    '[Otherskill Admin] Add Otherskill Fail',
    props<{ error: string }>()
);

export const addOtherskillSuccess = createAction(
    '[Otherskill Admin] Add Otherskill Success',
    props<{ otherskill: OtherskillEntity }>()
);

export const getOtherskill = createAction('[Otherskill] Get Otherskill', props<{ id: string }>());

export const getOtherskillSuccess = createAction(
    '[Otherskill] Get Otherskill Success',
    props<{ otherskill: OtherskillEntity | null }>()
);

export const getOtherskillFail = createAction(
    '[Otherskill] Get Otherskill Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Otherskill Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listOtherskills = createAction('[Otherskill Admin] List Otherskills');

export const listOtherskillsSuccess = createAction(
    '[Otherskill Admin] List Otherskills Success',
    props<{ otherskills: OtherskillEntity[] }>()
);

export const listOtherskillsFail = createAction(
    '[Otherskill Admin] List Otherskills Fail',
    props<{ error: string }>()
);

export const updateOtherskill = createAction(
    '[Otherskill Admin] Update Otherskill',
    props<{ otherskill: OtherskillEntityUpdate }>()
);

export const updateOtherskillFail = createAction(
    '[Otherskill Admin] Update Otherskill Fail',
    props<{ error: string }>()
);

export const updateOtherskillSuccess = createAction(
    '[Otherskill Admin] Update Otherskill Success',
    props<{ otherskill: Update<OtherskillEntityUpdate> }>()
);
