import { ProofexperienceEntity, ProofexperienceEntityAdd, ProofexperienceEntityUpdate } from 'src/app/api/domain/proofexperience';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addProofexperience = createAction(
    '[Proofexperience Admin] Add Proofexperience',
    props<{ proofexperience: ProofexperienceEntityAdd }>()
);

export const addProofexperienceFail = createAction(
    '[Proofexperience Admin] Add Proofexperience Fail',
    props<{ error: string }>()
);

export const addProofexperienceSuccess = createAction(
    '[Proofexperience Admin] Add Proofexperience Success',
    props<{ proofexperience: ProofexperienceEntity }>()
);

export const getProofexperience = createAction('[Proofexperience] Get Proofexperience', props<{ id: string }>());

export const getProofexperienceSuccess = createAction(
    '[Proofexperience] Get Proofexperience Success',
    props<{ proofexperience: ProofexperienceEntity | null }>()
);

export const getProofexperienceFail = createAction(
    '[Proofexperience] Get Proofexperience Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Proofexperience Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listProofexperiences = createAction('[Proofexperience Admin] List Proofexperiences');

export const listProofexperiencesSuccess = createAction(
    '[Proofexperience Admin] List Proofexperiences Success',
    props<{ proofexperiences: ProofexperienceEntity[] }>()
);

export const listProofexperiencesFail = createAction(
    '[Proofexperience Admin] List Proofexperiences Fail',
    props<{ error: string }>()
);

export const updateProofexperience = createAction(
    '[Proofexperience Admin] Update Proofexperience',
    props<{ proofexperience: ProofexperienceEntityUpdate }>()
);

export const updateProofexperienceFail = createAction(
    '[Proofexperience Admin] Update Proofexperience Fail',
    props<{ error: string }>()
);

export const updateProofexperienceSuccess = createAction(
    '[Proofexperience Admin] Update Proofexperience Success',
    props<{ proofexperience: Update<ProofexperienceEntityUpdate> }>()
);

export const deleteProofexperience = createAction(
    '[Proofexperience Admin] Delete Proofexperience',
    props<{ id: string }>()
);

export const deleteProofexperienceFail = createAction(
    '[Proofexperience Admin] Delete Proofexperience Fail',
    props<{ error: string }>()
);

export const deleteProofexperienceSuccess = createAction(
    '[Proofexperience Admin] Delete Proofexperience Success',
    props<{ id: string }>()
);