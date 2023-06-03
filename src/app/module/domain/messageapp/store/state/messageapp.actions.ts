import { MessageappEntity, MessageappEntityAdd, MessageappEntityUpdate } from 'src/app/api/domain/messageapp';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addMessageapp = createAction(
    '[Messageapp Admin] Add Messageapp',
    props<{ messageapp: MessageappEntityAdd }>()
);

export const addMessageappFail = createAction(
    '[Messageapp Admin] Add Messageapp Fail',
    props<{ error: string }>()
);

export const addMessageappSuccess = createAction(
    '[Messageapp Admin] Add Messageapp Success',
    props<{ messageapp: MessageappEntity }>()
);

export const getMessageapp = createAction('[Messageapp] Get Messageapp', props<{ id: string }>());

export const getMessageappSuccess = createAction(
    '[Messageapp] Get Messageapp Success',
    props<{ messageapp: MessageappEntity | null }>()
);

export const getMessageappFail = createAction(
    '[Messageapp] Get Messageapp Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Messageapp Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listMessageapps = createAction('[Messageapp Admin] List Messageapps');

export const listMessageappsSuccess = createAction(
    '[Messageapp Admin] List Messageapps Success',
    props<{ messageapps: MessageappEntity[] }>()
);

export const listMessageappsFail = createAction(
    '[Messageapp Admin] List Messageapps Fail',
    props<{ error: string }>()
);

export const updateMessageapp = createAction(
    '[Messageapp Admin] Update Messageapp',
    props<{ messageapp: MessageappEntityUpdate }>()
);

export const updateMessageappFail = createAction(
    '[Messageapp Admin] Update Messageapp Fail',
    props<{ error: string }>()
);

export const updateMessageappSuccess = createAction(
    '[Messageapp Admin] Update Messageapp Success',
    props<{ messageapp: Update<MessageappEntityUpdate> }>()
);

export const deleteMessageapp = createAction(
    '[Messageapp Admin] Delete Messageapp',
    props<{ id: string }>()
);

export const deleteMessageappFail = createAction(
    '[Messageapp Admin] Delete Messageapp Fail',
    props<{ error: string }>()
);

export const deleteMessageappSuccess = createAction(
    '[Messageapp Admin] Delete Messageapp Success',
    props<{ id: string }>()
);