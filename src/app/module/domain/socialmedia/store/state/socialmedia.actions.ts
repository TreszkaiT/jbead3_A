import { SocialmediaEntity, SocialmediaEntityAdd, SocialmediaEntityUpdate } from 'src/app/api/domain/socialmedia';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addSocialmedia = createAction(
    '[Socialmedia Admin] Add Socialmedia',
    props<{ socialmedia: SocialmediaEntityAdd }>()
);

export const addSocialmediaFail = createAction(
    '[Socialmedia Admin] Add Socialmedia Fail',
    props<{ error: string }>()
);

export const addSocialmediaSuccess = createAction(
    '[Socialmedia Admin] Add Socialmedia Success',
    props<{ socialmedia: SocialmediaEntity }>()
);

export const getSocialmedia = createAction('[Socialmedia] Get Socialmedia', props<{ id: string }>());

export const getSocialmediaSuccess = createAction(
    '[Socialmedia] Get Socialmedia Success',
    props<{ socialmedia: SocialmediaEntity | null }>()
);

export const getSocialmediaFail = createAction(
    '[Socialmedia] Get Socialmedia Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Socialmedia Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listSocialmedias = createAction('[Socialmedia Admin] List Socialmedias');

export const listSocialmediasSuccess = createAction(
    '[Socialmedia Admin] List Socialmedias Success',
    props<{ socialmedias: SocialmediaEntity[] }>()
);

export const listSocialmediasFail = createAction(
    '[Socialmedia Admin] List Socialmedias Fail',
    props<{ error: string }>()
);

export const updateSocialmedia = createAction(
    '[Socialmedia Admin] Update Socialmedia',
    props<{ socialmedia: SocialmediaEntityUpdate }>()
);

export const updateSocialmediaFail = createAction(
    '[Socialmedia Admin] Update Socialmedia Fail',
    props<{ error: string }>()
);

export const updateSocialmediaSuccess = createAction(
    '[Socialmedia Admin] Update Socialmedia Success',
    props<{ socialmedia: Update<SocialmediaEntityUpdate> }>()
);

export const deleteSocialmedia = createAction(
    '[Socialmedia Admin] Delete Socialmedia',
    props<{ id: string }>()
);

export const deleteSocialmediaFail = createAction(
    '[Socialmedia Admin] Delete Socialmedia Fail',
    props<{ error: string }>()
);

export const deleteSocialmediaSuccess = createAction(
    '[Socialmedia Admin] Delete Socialmedia Success',
    props<{ id: string }>()
);