import { StudyEntity, StudyEntityAdd, StudyEntityUpdate } from 'src/app/api/domain/study';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addStudy = createAction(
    '[Study Admin] Add Study',
    props<{ study: StudyEntityAdd }>()
);

export const addStudyFail = createAction(
    '[Study Admin] Add Study Fail',
    props<{ error: string }>()
);

export const addStudySuccess = createAction(
    '[Study Admin] Add Study Success',
    props<{ study: StudyEntity }>()
);

export const getStudy = createAction('[Study] Get Study', props<{ id: string }>());

export const getStudySuccess = createAction(
    '[Study] Get Study Success',
    props<{ study: StudyEntity | null }>()
);

export const getStudyFail = createAction(
    '[Study] Get Study Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Study Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listStudys = createAction('[Study Admin] List Studys');

export const listStudysSuccess = createAction(
    '[Study Admin] List Studys Success',
    props<{ studys: StudyEntity[] }>()
);

export const listStudysFail = createAction(
    '[Study Admin] List Studys Fail',
    props<{ error: string }>()
);

export const updateStudy = createAction(
    '[Study Admin] Update Study',
    props<{ study: StudyEntityUpdate }>()
);

export const updateStudyFail = createAction(
    '[Study Admin] Update Study Fail',
    props<{ error: string }>()
);

export const updateStudySuccess = createAction(
    '[Study Admin] Update Study Success',
    props<{ study: Update<StudyEntityUpdate> }>()
);

export const deleteStudy = createAction(
    '[Study Admin] Delete Study',
    props<{ id: string }>()
);

export const deleteStudyFail = createAction(
    '[Study Admin] Delete Study Fail',
    props<{ error: string }>()
);

export const deleteStudySuccess = createAction(
    '[Study Admin] Delete Study Success',
    props<{ id: string }>()
);